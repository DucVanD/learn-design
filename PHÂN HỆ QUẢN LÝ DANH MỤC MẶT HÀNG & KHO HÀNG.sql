-- PHÂN HỆ QUẢN LÝ DANH MỤC MẶT HÀNG & KHO HÀNG
-- ----------------------------------------------------------------------------
-- 1. CHI NHÁNH / NHÀ HÀNG (Stores)
-- ----------------------------------------------------------------------------
CREATE TABLE Stores (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã nhà hàng ('CN01', 'CN02')
    Name NVARCHAR(255) NOT NULL,             -- Tên nhà hàng
    Address NVARCHAR(500) NULL,
    Phone NVARCHAR(50) NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    
    -- Cột Audit & Thùng rác
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0
);

-- ----------------------------------------------------------------------------
-- 2. KHO HÀNG (Warehouses)
-- ----------------------------------------------------------------------------
CREATE TABLE Warehouses (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    StoreId INT NOT NULL,
    Code NVARCHAR(50) NOT NULL,
    Name NVARCHAR(255) NOT NULL,
    IsAllowNegativeStock BIT NOT NULL DEFAULT 0, -- Cho phép âm kho chung cho kho này
    IsActive BIT NOT NULL DEFAULT 1,
    
    -- Cột Audit & Thùng rác
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,

    CONSTRAINT FK_Warehouses_Stores FOREIGN KEY (StoreId) REFERENCES Stores(Id),
    CONSTRAINT UQ_Store_WarehouseCode UNIQUE (StoreId, Code)
);

-- ----------------------------------------------------------------------------
-- 3. DANH MỤC ĐƠN VỊ TÍNH (Units)
-- ----------------------------------------------------------------------------
CREATE TABLE Units (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL UNIQUE,
    
    -- Cột Audit & Thùng rác
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0
);

-- ----------------------------------------------------------------------------
-- 4. LOẠI MẶT HÀNG (ProductTypes - Định nghĩa bộ luật trừ kho)
-- ----------------------------------------------------------------------------
CREATE TABLE ProductTypes (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,            -- Món chế biến, Kiêm vật tư, Nguyên liệu thô...
    IsSellable BIT NOT NULL DEFAULT 1,      -- [ ] Có bán hàng
    IsStockManaged BIT NOT NULL DEFAULT 0,  -- [ ] Có tồn kho
    IsHasRecipe BIT NOT NULL DEFAULT 0,     -- [ ] Có định lượng (BOM)
    
    -- Cột Audit & Thùng rác
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0
);

-- ----------------------------------------------------------------------------
-- 5. LOẠI ĐỒ VÀ NHÓM MẶT HÀNG (ItemTypes & Categories)
-- ----------------------------------------------------------------------------
CREATE TABLE ItemTypes (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL UNIQUE,     -- Tên: 'Đồ ăn', 'Đồ uống', 'Đồ nướng'...
    Note NVARCHAR(255) NULL,
    
    -- Cột Audit & Thùng rác
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0
);

CREATE TABLE Categories (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    ParentId INT NULL,                      -- Tự liên kết Nhóm cha -> Nhóm con
    ItemTypeId INT NULL,                    -- Khóa ngoại trỏ sang ItemTypes (Loại đồ)
    CodePrefix NVARCHAR(20) NULL,           -- Tiền tố tự sinh mã (VD: 'BIA')
    Name NVARCHAR(255) NOT NULL,            -- Tên nhóm (VD: 'BÒ - BÊ - TRÂU - DÊ')
    ImageUrl NVARCHAR(500) NULL,
    SortOrder INT NOT NULL DEFAULT 0,
    IsActive BIT NOT NULL DEFAULT 1,
    
    -- Cột Audit & Thùng rác
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,

    CONSTRAINT FK_Categories_Parent FOREIGN KEY (ParentId) REFERENCES Categories(Id),
    CONSTRAINT FK_Categories_ItemTypes FOREIGN KEY (ItemTypeId) REFERENCES ItemTypes(Id)
);

-- ----------------------------------------------------------------------------
-- 6. MẶT HÀNG / SẢN PHẨM / NGUYÊN LIỆU (Products)
-- ----------------------------------------------------------------------------
CREATE TABLE Products (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    CategoryId INT NOT NULL,
    ProductTypeId INT NOT NULL,
    BaseUnitId INT NOT NULL,                -- ĐVT bán / định lượng lẻ (Lon, Cốc, Gam)
    
    SKU NVARCHAR(100) NOT NULL UNIQUE,      -- Mã mặt hàng (VD: 'BIA001')
    Barcode NVARCHAR(100) NULL,             -- Mã vạch quét
    Name NVARCHAR(255) NOT NULL,            -- Tên món
    
    SellingPrice DECIMAL(18,2) NOT NULL DEFAULT 0, -- Giá bán chuẩn niêm yết
    ImportPrice DECIMAL(18,2) NOT NULL DEFAULT 0,  -- Giá nhập mua
    CostPrice DECIMAL(18,2) NOT NULL DEFAULT 0,    -- Giá vốn (Tự tính từ BOM hoặc kho)
    
    IsTimeBasedPricing BIT NOT NULL DEFAULT 0, -- [ ] Giá theo thời giá / khung giờ
    IsAllowNegativeStock BIT NOT NULL DEFAULT 1, -- Cho phép bán âm theo riêng từng món
    IsLocked BIT NOT NULL DEFAULT 0,           -- Tạm khóa món (Ngưng kinh doanh)
    IsWeighted BIT NOT NULL DEFAULT 0,         -- Khối lượng theo cân (Cân điện tử)
    MinStockQuantity DECIMAL(18,4) NOT NULL DEFAULT 0, -- Tồn tối thiểu cảnh báo
    ImageUrl NVARCHAR(500) NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    
    -- Cột Audit & Thùng rác
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,

    CONSTRAINT FK_Products_Categories FOREIGN KEY (CategoryId) REFERENCES Categories(Id),
    CONSTRAINT FK_Products_ProductTypes FOREIGN KEY (ProductTypeId) REFERENCES ProductTypes(Id),
    CONSTRAINT FK_Products_BaseUnit FOREIGN KEY (BaseUnitId) REFERENCES Units(Id)
);

-- ----------------------------------------------------------------------------
-- 7. ĐA ĐƠN VỊ TÍNH QUY ĐỔI (ProductUnitConversions)
-- ----------------------------------------------------------------------------
CREATE TABLE ProductUnitConversions (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    ProductId INT NOT NULL,
    UnitId INT NOT NULL,                    -- DVT Quy đổi (VD: Thùng)
    ConversionRate DECIMAL(18,4) NOT NULL,  -- Tỉ lệ quy đổi (VD: 1 Thùng = 24 Lon)
    SellingPrice DECIMAL(18,2) NULL,        -- Giá bán riêng cho DVT này (nếu mua sỉ)

    CONSTRAINT FK_Conversions_Products FOREIGN KEY (ProductId) REFERENCES Products(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Conversions_Units FOREIGN KEY (UnitId) REFERENCES Units(Id),
    CONSTRAINT UQ_Product_Unit UNIQUE (ProductId, UnitId)
);

-- ----------------------------------------------------------------------------
-- 8. ĐỊNH LƯỢNG MÓN ÁN (ProductRecipes - BOM)
-- ----------------------------------------------------------------------------
CREATE TABLE ProductRecipes (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    ProductId INT NOT NULL,                 -- ID Món ăn
    IngredientId INT NOT NULL,              -- ID Nguyên liệu thô
    Quantity DECIMAL(18,4) NOT NULL,        -- Số lượng hao phí (tính theo BaseUnit)
    
    ImportUnitPrice DECIMAL(18,2) NOT NULL DEFAULT 0, -- Đơn giá nhập tại thời điểm khai báo
    CostUnitPrice DECIMAL(18,2) NOT NULL DEFAULT 0,   -- Đơn giá vốn nguyên liệu trong kho
    
    CONSTRAINT FK_Recipes_Product FOREIGN KEY (ProductId) REFERENCES Products(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Recipes_Ingredient FOREIGN KEY (IngredientId) REFERENCES Products(Id),
    CONSTRAINT UQ_Product_Ingredient UNIQUE (ProductId, IngredientId)
);
CREATE INDEX IX_ProductRecipes_IngredientId ON ProductRecipes(IngredientId); -- Tối ưu Truy vấn ngược

-- ----------------------------------------------------------------------------
-- 9. QUẢN LÝ BẢNG GIÁ ĐA DẠNG (PriceLists & ProductPrices)
-- ----------------------------------------------------------------------------
CREATE TABLE PriceLists (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    StoreId INT NULL,                       -- Thuộc Chi nhánh (NULL = Toàn hệ thống)
    Code NVARCHAR(50) NOT NULL UNIQUE,
    Name NVARCHAR(255) NOT NULL,            -- VD: 'Bảng giá VIP', 'Bảng giá Happy Hour'
    
    TimeFrom TIME NULL,                     -- Giờ bắt đầu (VD: 14:00)
    TimeTo TIME NULL,                       -- Giờ kết thúc (VD: 17:00)
    IsWeekendOnly BIT NOT NULL DEFAULT 0,   -- Chỉ áp dụng Thứ 7 & Chủ Nhật
    IsActive BIT NOT NULL DEFAULT 1,
    
    -- Cột Audit & Thùng rác
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0
);

CREATE TABLE ProductPrices (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    PriceListId INT NOT NULL,
    ProductId INT NOT NULL,
    Price DECIMAL(18,2) NOT NULL,           -- Mức giá riêng áp dụng trong bảng giá này

    CONSTRAINT FK_ProductPrices_PriceLists FOREIGN KEY (PriceListId) REFERENCES PriceLists(Id) ON DELETE CASCADE,
    CONSTRAINT FK_ProductPrices_Products FOREIGN KEY (ProductId) REFERENCES Products(Id) ON DELETE CASCADE,
    CONSTRAINT UQ_PriceList_Product UNIQUE (ProductId, PriceListId)
);

-- ----------------------------------------------------------------------------
-- 10. TỒN KHO THỰC TẾ THEO KHO VÀ SẢN PHẨM (Inventories)
-- ----------------------------------------------------------------------------
CREATE TABLE Inventories (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    WarehouseId INT NOT NULL,
    ProductId INT NOT NULL,
    OnHandQuantity DECIMAL(18,4) NOT NULL DEFAULT 0,  -- Tồn kho thực tế
    ReservedQuantity DECIMAL(18,4) NOT NULL DEFAULT 0,-- Tồn kho giữ chỗ (Chờ thanh toán)
    UpdatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),

    CONSTRAINT FK_Inventories_Warehouses FOREIGN KEY (WarehouseId) REFERENCES Warehouses(Id),
    CONSTRAINT FK_Inventories_Products FOREIGN KEY (ProductId) REFERENCES Products(Id),
    CONSTRAINT UQ_Warehouse_Product UNIQUE (WarehouseId, ProductId)
);

-- 11. DANH MỤC NHÀ CUNG CẤP
CREATE TABLE Suppliers (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã NCC (VD: 'NCC_HEINEKEN')
    Name NVARCHAR(255) NOT NULL,             -- Tên Công ty / Đại lý
    Phone NVARCHAR(50) NULL,
    Address NVARCHAR(500) NULL,
    DebtAmount DECIMAL(18,2) NOT NULL DEFAULT 0, -- Dư nợ công nợ NCC
    IsActive BIT NOT NULL DEFAULT 1,
    
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0
);
-- 12. PHIẾU NHẬP HÀNG TỪ NHÀ CUNG CẤP & CHI TIẾT
CREATE TABLE PurchaseReceipts (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    WarehouseId INT NOT NULL,               -- Nhập vào Kho nào
    SupplierId INT NOT NULL,                -- Mua của NCC nào
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã phiếu nhập ('PN20260715-01')
    ReceiptDate DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    
    TotalAmount DECIMAL(18,2) NOT NULL DEFAULT 0, -- Tổng tiền hàng
    DiscountAmount DECIMAL(18,2) NOT NULL DEFAULT 0, -- Giảm giá
    PaidAmount DECIMAL(18,2) NOT NULL DEFAULT 0,  -- Số tiền đã trả NCC
    Status INT NOT NULL DEFAULT 1,          -- 1: Mới tạo, 2: Đã nhập kho & Cộng tồn, 3: Hủy
    Note NVARCHAR(500) NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,
    CONSTRAINT FK_PurchaseReceipts_Warehouses FOREIGN KEY (WarehouseId) REFERENCES Warehouses(Id),
    CONSTRAINT FK_PurchaseReceipts_Suppliers FOREIGN KEY (SupplierId) REFERENCES Suppliers(Id)
);
CREATE TABLE PurchaseReceiptDetails (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    PurchaseReceiptId INT NOT NULL,
    ProductId INT NOT NULL,
    UnitId INT NOT NULL,                    -- ĐVT khi nhập (Thùng, Két, Kg)
    Quantity DECIMAL(18,4) NOT NULL,        -- Số lượng nhập
    UnitPrice DECIMAL(18,2) NOT NULL,       -- Đơn giá nhập
    TotalAmount DECIMAL(18,2) NOT NULL,     -- Thành tiền
    CONSTRAINT FK_ReceiptDetails_Receipts FOREIGN KEY (PurchaseReceiptId) REFERENCES PurchaseReceipts(Id) ON DELETE CASCADE,
    CONSTRAINT FK_ReceiptDetails_Products FOREIGN KEY (ProductId) REFERENCES Products(Id),
    CONSTRAINT FK_ReceiptDetails_Units FOREIGN KEY (UnitId) REFERENCES Units(Id)
);
-- 13. PHIẾU CHUYỂN KHO NỘI BỘ (Kho Tổng -> Kho Bar/Bếp)
CREATE TABLE StockTransfers (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    FromWarehouseId INT NOT NULL,           -- Kho xuất
    ToWarehouseId INT NOT NULL,             -- Kho nhận
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã phiếu chuyển ('CK-001')
    TransferDate DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    Status INT NOT NULL DEFAULT 1,          -- 1: Đang chuyển, 2: Hoàn tất
    Note NVARCHAR(500) NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,
    CONSTRAINT FK_Transfers_FromWarehouse FOREIGN KEY (FromWarehouseId) REFERENCES Warehouses(Id),
    CONSTRAINT FK_Transfers_ToWarehouse FOREIGN KEY (ToWarehouseId) REFERENCES Warehouses(Id)
);
CREATE TABLE StockTransferDetails (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    StockTransferId INT NOT NULL,
    ProductId INT NOT NULL,
    Quantity DECIMAL(18,4) NOT NULL,        -- Số lượng chuyển (BaseUnit)
    CONSTRAINT FK_TransferDetails_Transfers FOREIGN KEY (StockTransferId) REFERENCES StockTransfers(Id) ON DELETE CASCADE,
    CONSTRAINT FK_TransferDetails_Products FOREIGN KEY (ProductId) REFERENCES Products(Id)
);
-- 14. PHIẾU KIỂM KÊ KHO VÀ CÂN BẰNG THẤT THOÁT
CREATE TABLE StockTakes (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    WarehouseId INT NOT NULL,               -- Kho kiểm kê
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã kiểm kê ('KK-2026-07')
    TakeDate DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    Status INT NOT NULL DEFAULT 1,          -- 1: Đang đếm, 2: Đã chốt & Cân bằng tồn
    Note NVARCHAR(500) NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,
    CONSTRAINT FK_StockTakes_Warehouses FOREIGN KEY (WarehouseId) REFERENCES Warehouses(Id)
);
CREATE TABLE StockTakeDetails (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    StockTakeId INT NOT NULL,
    ProductId INT NOT NULL,
    SystemQuantity DECIMAL(18,4) NOT NULL,  -- Tồn kho máy tính
    ActualQuantity DECIMAL(18,4) NOT NULL,  -- Tồn đếm thực tế
    DifferenceQuantity AS (ActualQuantity - SystemQuantity), -- Tự tính chênh lệch (+ Thừa / - Thất thoát)
    CONSTRAINT FK_StockTakeDetails_Takes FOREIGN KEY (StockTakeId) REFERENCES StockTakes(Id) ON DELETE CASCADE,
    CONSTRAINT FK_StockTakeDetails_Products FOREIGN KEY (ProductId) REFERENCES Products(Id)
);
-- 15. THẺ KHO / NHẬT KÝ BIẾN ĐỘNG KHO TỔNG HỢP (InventoryTransactions)
CREATE TABLE InventoryTransactions (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    WarehouseId INT NOT NULL,
    ProductId INT NOT NULL,
    
    TransactionType INT NOT NULL,           -- 1: Nhập NCC, 2: POS Trừ xuất bán, 3: Chuyển kho, 4: Cân bằng kiểm kê
    QuantityChanged DECIMAL(18,4) NOT NULL, -- Số lượng biến động (+ Tăng, - Giảm)
    QuantityAfter DECIMAL(18,4) NOT NULL,   -- Tồn kho sau khi giao dịch xảy ra
    UnitPrice DECIMAL(18,2) NOT NULL DEFAULT 0,
    ReferenceCode NVARCHAR(100) NULL,       -- Mã phiếu nhập / Mã Hóa đơn POS / Mã phiếu chuyển
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    Note NVARCHAR(500) NULL,
    CONSTRAINT FK_InvTrans_Warehouses FOREIGN KEY (WarehouseId) REFERENCES Warehouses(Id),
    CONSTRAINT FK_InvTrans_Products FOREIGN KEY (ProductId) REFERENCES Products(Id)
);

-- ----------------------------------------------------------------------------
-- 16. PHIẾU XUẤT KHO KHÁC (Hủy hỏng, Tiêu dùng nội bộ, Trả hàng NCC)
-- ----------------------------------------------------------------------------
CREATE TABLE StockIssues (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    WarehouseId INT NOT NULL,               -- Xuất từ Kho nào
    SupplierId INT NULL,                    -- Xuất trả NCC nào (nếu có)
    Code NVARCHAR(50) NOT NULL UNIQUE,      -- Mã phiếu xuất (VD: 'PX26/00001')
    IssueDate DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    
    ReasonType INT NOT NULL DEFAULT 1,      -- 1: Xuất khác, 2: Hủy hỏng/Hết hạn, 3: Tiêu dùng nội bộ, 4: Trả hàng NCC
    SubTotalAmount DECIMAL(18,2) NOT NULL DEFAULT 0, -- Tiền hàng
    DiscountAmount DECIMAL(18,2) NOT NULL DEFAULT 0, -- Giảm giá
    TotalAmount DECIMAL(18,2) NOT NULL DEFAULT 0,    -- Tổng tiền xuất
    PaidAmount DECIMAL(18,2) NOT NULL DEFAULT 0,     -- Tiền nhận lại (nếu trả NCC)
    
    Status INT NOT NULL DEFAULT 1,          -- 1: Mới tạo, 2: Đã xuất & Trừ tồn kho, 3: Hủy
    Note NVARCHAR(500) NULL,                -- Diễn giải / Ghi chú

    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatedBy NVARCHAR(100) NULL,
    UpdatedAt DATETIME2 NULL,
    UpdatedBy NVARCHAR(100) NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,

    CONSTRAINT FK_StockIssues_Warehouses FOREIGN KEY (WarehouseId) REFERENCES Warehouses(Id),
    CONSTRAINT FK_StockIssues_Suppliers FOREIGN KEY (SupplierId) REFERENCES Suppliers(Id)
);

CREATE TABLE StockIssueDetails (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    StockIssueId INT NOT NULL,
    ProductId INT NOT NULL,
    UnitId INT NOT NULL,                    -- ĐVT khi xuất (Chai, Lon, Kg...)
    Quantity DECIMAL(18,4) NOT NULL,        -- Số lượng xuất
    UnitPrice DECIMAL(18,2) NOT NULL,       -- Đơn giá xuất
    TotalAmount DECIMAL(18,2) NOT NULL,     -- Thành tiền
    Note NVARCHAR(255) NULL,

    CONSTRAINT FK_IssueDetails_Issues FOREIGN KEY (StockIssueId) REFERENCES StockIssues(Id) ON DELETE CASCADE,
    CONSTRAINT FK_IssueDetails_Products FOREIGN KEY (ProductId) REFERENCES Products(Id),
    CONSTRAINT FK_IssueDetails_Units FOREIGN KEY (UnitId) REFERENCES Units(Id)
);

