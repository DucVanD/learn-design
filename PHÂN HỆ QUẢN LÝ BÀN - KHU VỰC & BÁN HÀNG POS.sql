-- ============================================================================
-- PHÂN HỆ QUẢN LÝ BÀN - KHU VỰC & BÁN HÀNG POS (DINING AREA & POS ORDERS)
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. LOẠI PHÒNG (Phòng Thường, VIP Đơn, VIP Karaoke...)
-- ----------------------------------------------------------------------------
CREATE TABLE RoomTypes (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã loại phòng ('THUONG', 'VIP', 'KARAOKE')
    Name NVARCHAR(100) NOT NULL,            -- Tên loại phòng
    Note NVARCHAR(255) NULL,
    IsActive BIT NOT NULL DEFAULT 1
);

-- ----------------------------------------------------------------------------
-- 2. NHÓM HIỂN THỊ BÀN (Bàn Sofa, Bàn Tròn, Ghế Gỗ...)
-- ----------------------------------------------------------------------------
CREATE TABLE TableDisplayGroups (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã nhóm ('SOFA', 'BAN_TRON')
    Name NVARCHAR(100) NOT NULL,            -- Tên nhóm hiển thị
    SortOrder INT NOT NULL DEFAULT 0,
    IsActive BIT NOT NULL DEFAULT 1
);

-- ----------------------------------------------------------------------------
-- 3. KHU VỰC / PHÒNG (Tầng 1, Tầng 2, Sân Vườn, Phòng VIP...)
-- ----------------------------------------------------------------------------
CREATE TABLE DiningAreas (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    StoreId INT NOT NULL,                   -- Thuộc Chi nhánh nào
    WarehouseId INT NOT NULL,               -- Kho bán hàng mặc định cho Khu vực này
    PriceListId INT NULL,                   -- Bảng giá riêng áp dụng (Giá chung, VIP...)
    
    Code NVARCHAR(50) NOT NULL,             -- Mã khu vực ('T1', 'VIP01')
    Name NVARCHAR(255) NOT NULL,            -- Tên khu vực ('Tầng 1', 'Phòng VIP 101')
    IconName NVARCHAR(100) NULL,            -- Tên icon hiển thị
    TabPosition INT NOT NULL DEFAULT 1,     -- 1: Tab trên, 2: Tab dưới
    InvoiceTemplateId INT NULL,             -- Mẫu in hóa đơn riêng (Mẫu 80mm, A4...)
    
    OpenFee DECIMAL(18,2) NOT NULL DEFAULT 0,    -- Tiền mở bàn / Tiền vào cửa
    HourlyRate DECIMAL(18,2) NOT NULL DEFAULT 0, -- Giá tiền giờ phòng/bida
    
    SortOrder INT NOT NULL DEFAULT 0,
    IsActive BIT NOT NULL DEFAULT 1,

    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,

    CONSTRAINT FK_DiningAreas_Stores FOREIGN KEY (StoreId) REFERENCES Stores(Id),
    CONSTRAINT FK_DiningAreas_Warehouses FOREIGN KEY (WarehouseId) REFERENCES Warehouses(Id),
    CONSTRAINT FK_DiningAreas_PriceLists FOREIGN KEY (PriceListId) REFERENCES PriceLists(Id)
);

-- ----------------------------------------------------------------------------
-- 4. MẶT HÀNG MẶC ĐỊNH THEO KHU VỰC (Tự cho Khăn lạnh/Nước suối vào Đơn khi mở bàn)
-- ----------------------------------------------------------------------------
CREATE TABLE AreaDefaultProducts (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    AreaId INT NOT NULL,                    -- Khu vực nào
    ProductId INT NOT NULL,                 -- Món mặc định
    DefaultQuantity DECIMAL(18,4) NOT NULL DEFAULT 1, -- Số lượng mặc định

    CONSTRAINT FK_AreaDefaultProducts_Areas FOREIGN KEY (AreaId) REFERENCES DiningAreas(Id) ON DELETE CASCADE,
    CONSTRAINT FK_AreaDefaultProducts_Products FOREIGN KEY (ProductId) REFERENCES Products(Id) ON DELETE CASCADE,
    CONSTRAINT UQ_Area_Product UNIQUE (AreaId, ProductId)
);

-- ----------------------------------------------------------------------------
-- 5. BÀN ĂN (Sơ đồ Bàn Ăn Sắc Màu Real-time)
-- ----------------------------------------------------------------------------
CREATE TABLE DiningTables (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    AreaId INT NOT NULL,                    -- Thuộc Khu vực nào
    DisplayGroupId INT NULL,                -- Nhóm hiển thị (Sofa, Bàn tròn)
    RoomTypeId INT NULL,                    -- Loại phòng (Phòng Thường, VIP)
    PriceListId INT NULL,                   -- Bảng giá riêng cho Bàn này (nếu có)
    
    Code NVARCHAR(50) NOT NULL,             -- Mã bàn ('B01', 'B20')
    Name NVARCHAR(100) NOT NULL,            -- Tên bàn ('Bàn 01', 'Bàn 20')
    Note NVARCHAR(255) NULL,
    
    Status INT NOT NULL DEFAULT 0,          -- 0: Trống (Xám), 1: Có khách (Đỏ), 2: Chờ thanh toán (Vàng)
    CurrentOrderId INT NULL,                -- Hóa đơn đang phục vụ tại bàn
    StartTime DATETIME2 NULL,               -- Thời gian mở bàn
    
    SortOrder INT NOT NULL DEFAULT 0,
    IsActive BIT NOT NULL DEFAULT 1,
    
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,

    CONSTRAINT FK_DiningTables_Areas FOREIGN KEY (AreaId) REFERENCES DiningAreas(Id),
    CONSTRAINT FK_DiningTables_DisplayGroups FOREIGN KEY (DisplayGroupId) REFERENCES TableDisplayGroups(Id),
    CONSTRAINT FK_DiningTables_RoomTypes FOREIGN KEY (RoomTypeId) REFERENCES RoomTypes(Id),
    CONSTRAINT FK_DiningTables_PriceLists FOREIGN KEY (PriceListId) REFERENCES PriceLists(Id)
);

-- ----------------------------------------------------------------------------
-- 6. NHÓM KHÁCH HÀNG & KHÁCH HÀNG (Tích điểm thưởng & Nợ ăn gối đầu)
-- ----------------------------------------------------------------------------
CREATE TABLE CustomerGroups (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã nhóm ('VIP', 'RETAIL')
    Name NVARCHAR(100) NOT NULL,            -- Tên nhóm ('Khách VIP', 'Khách Lẻ')
    DiscountPercent DECIMAL(5,2) NOT NULL DEFAULT 0, -- % Giảm giá tự động cho nhóm này
    PriceListId INT NULL,                   -- Áp Bảng giá riêng cho nhóm
    IsActive BIT NOT NULL DEFAULT 1
);

CREATE TABLE Customers (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    CustomerGroupId INT NOT NULL,           -- Nhóm khách
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã KH ('KH0001')
    Name NVARCHAR(255) NOT NULL,            -- Tên KH
    Phone NVARCHAR(50) NULL,
    Address NVARCHAR(500) NULL,
    RewardPoints DECIMAL(18,2) NOT NULL DEFAULT 0, -- Điểm tích lũy thưởng
    DebtAmount DECIMAL(18,2) NOT NULL DEFAULT 0,   -- Dư nợ công nợ ăn gối đầu
    
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,

    CONSTRAINT FK_Customers_CustomerGroups FOREIGN KEY (CustomerGroupId) REFERENCES CustomerGroups(Id)
);

-- ----------------------------------------------------------------------------
-- 7. HÓA ĐƠN BÁN HÀNG POS (Orders)
-- ----------------------------------------------------------------------------
CREATE TABLE Orders (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    StoreId INT NOT NULL,                   -- Nhà hàng / Chi nhánh
    TableId INT NULL,                       -- Bàn ăn (NULL = Mang về)
    CustomerId INT NULL,                    -- Khách hàng (NULL = Khách lẻ)
    PriceListId INT NOT NULL,               -- Bảng giá áp dụng
    
    OrderCode NVARCHAR(50) NOT NULL UNIQUE, -- Mã hóa đơn ('HD20260717-001')
    GuestCount INT NOT NULL DEFAULT 1,      -- Số lượng khách tại bàn
    
    SubTotalAmount DECIMAL(18,2) NOT NULL DEFAULT 0,   -- Tiền hàng món ăn
    HourlyAmount DECIMAL(18,2) NOT NULL DEFAULT 0,     -- Tiền giờ phòng
    DiscountPercent DECIMAL(5,2) NOT NULL DEFAULT 0,   -- % Giảm giá
    DiscountAmount DECIMAL(18,2) NOT NULL DEFAULT 0,    -- Số tiền giảm giá
    ServiceFeeAmount DECIMAL(18,2) NOT NULL DEFAULT 0,  -- Phí dịch vụ
    TaxAmount DECIMAL(18,2) NOT NULL DEFAULT 0,         -- Tiền Thuế VAT
    TotalAmount DECIMAL(18,2) NOT NULL DEFAULT 0,       -- TỔNG TIỀN PHẢI TRẢ
    
    Status INT NOT NULL DEFAULT 1,          -- 1: Đang ăn, 2: Đã thanh toán, 3: Đã Hủy
    OpenedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    ClosedAt DATETIME2 NULL,

    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,

    CONSTRAINT FK_Orders_Stores FOREIGN KEY (StoreId) REFERENCES Stores(Id),
    CONSTRAINT FK_Orders_Tables FOREIGN KEY (TableId) REFERENCES DiningTables(Id),
    CONSTRAINT FK_Orders_Customers FOREIGN KEY (CustomerId) REFERENCES Customers(Id),
    CONSTRAINT FK_Orders_PriceLists FOREIGN KEY (PriceListId) REFERENCES PriceLists(Id)
);

-- ----------------------------------------------------------------------------
-- 8. CHI TIẾT MÓN ĂN TRÊN HÓA ĐƠN (OrderDetails)
-- ----------------------------------------------------------------------------
CREATE TABLE OrderDetails (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT NOT NULL,
    ProductId INT NOT NULL,                 -- Món ăn
    UnitId INT NOT NULL,                    -- ĐVT (Đĩa, Cốc, Chai)
    
    Quantity DECIMAL(18,4) NOT NULL DEFAULT 1, -- Số lượng gọi
    UnitPrice DECIMAL(18,2) NOT NULL,          -- Đơn giá
    DiscountPercent DECIMAL(5,2) NOT NULL DEFAULT 0,
    TotalAmount DECIMAL(18,2) NOT NULL,        -- Thành tiền
    CostPrice DECIMAL(18,2) NOT NULL DEFAULT 0,-- Giá vốn tại thời điểm bán (để tính lãi gộp)
    
    KitchenStatus INT NOT NULL DEFAULT 1,   -- 1: Chưa in Bếp, 2: Đã in Bếp/Bar, 3: Bếp đã chế biến xong
    Note NVARCHAR(255) NULL,                -- Ghi chú (Ít đường, Không cay...)

    CONSTRAINT FK_OrderDetails_Orders FOREIGN KEY (OrderId) REFERENCES Orders(Id) ON DELETE CASCADE,
    CONSTRAINT FK_OrderDetails_Products FOREIGN KEY (ProductId) REFERENCES Products(Id),
    CONSTRAINT FK_OrderDetails_Units FOREIGN KEY (UnitId) REFERENCES Units(Id)
);

-- ----------------------------------------------------------------------------
-- 9. THANH TOÁN ĐA PHƯƠNG THỨC (OrderPayments)
-- ----------------------------------------------------------------------------
CREATE TABLE OrderPayments (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT NOT NULL,
    PaymentMethod INT NOT NULL,             -- 1: Tiền mặt, 2: Chuyển khoản QR, 3: Thẻ ATM/Credit, 4: Điểm thưởng
    Amount DECIMAL(18,2) NOT NULL,          -- Số tiền thanh toán
    TransactionCode NVARCHAR(100) NULL,     -- Mã giao dịch ngân hàng / POS quẹt thẻ
    PaidAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CashierId NVARCHAR(100) NOT NULL,       -- Thu ngân thu tiền

    CONSTRAINT FK_OrderPayments_Orders FOREIGN KEY (OrderId) REFERENCES Orders(Id) ON DELETE CASCADE
);

-- ----------------------------------------------------------------------------
-- 10. NHẬT KÝ IN BẾP / BAR (KitchenPrintLogs)
-- ----------------------------------------------------------------------------
CREATE TABLE KitchenPrintLogs (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT NOT NULL,
    PrintedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    PrintedBy NVARCHAR(100) NOT NULL,       -- Nhân viên bấm in lệnh Bếp (F10)
    PrinterName NVARCHAR(100) NULL,         -- Máy in quầy Bar / Máy in Bếp chính
    PrintContent NVARCHAR(MAX) NULL,        -- Nội dung phiếu in
    
    CONSTRAINT FK_KitchenPrintLogs_Orders FOREIGN KEY (OrderId) REFERENCES Orders(Id) ON DELETE CASCADE
);
