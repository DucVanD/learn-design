const SharedComponents = {
  chrome() {
    return `
<!-- Header -->
<header class="header">
  <div class="header-inner">
    <a href="javascript:void(0)" class="logo" onclick="navigate('home')">NEON.VN</a>
    <nav>
      <ul class="nav-links">
        <li><a href="#!" onclick="navigate('home')" class="nav-link active" data-view="home">Trang chủ</a></li>
        <li><a href="#!" onclick="navigate('shop')" class="nav-link" data-view="shop">Shop</a></li>
        <li><a href="#!" onclick="navigate('collection')" class="nav-link" data-view="collection">Collection</a></li>
        <li><a href="#!" onclick="navigate('lookbook')" class="nav-link" data-view="lookbook">Lookbook</a></li>
        <li><a href="#!" onclick="navigate('sale')" class="nav-link" data-view="sale">Sale</a></li>
        <li><a href="#!" onclick="navigate('about')" class="nav-link" data-view="about">About</a></li>
        <li><a href="#!" onclick="navigate('contact')" class="nav-link" data-view="contact">Contact</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <div class="cart-btn" onclick="toggleCart()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <span class="cart-count" id="cartCount">0</span>
      </div>
      <div class="mobile-menu-btn" onclick="toggleMobileNav()">☰</div>
    </div>
  </div>
</header>

<!-- Mobile Nav -->
<div class="mobile-overlay" id="mobileOverlay" onclick="toggleMobileNav()"></div>
<div class="mobile-nav" id="mobileNav">
  <a href="#!" onclick="navigate('home');toggleMobileNav()">Trang chủ</a>
  <a href="#!" onclick="navigate('shop');toggleMobileNav()">Shop</a>
  <a href="#!" onclick="navigate('collection');toggleMobileNav()">Collection</a>
  <a href="#!" onclick="navigate('lookbook');toggleMobileNav()">Lookbook</a>
  <a href="#!" onclick="navigate('sale');toggleMobileNav()">Sale</a>
  <a href="#!" onclick="navigate('about');toggleMobileNav()">About</a>
  <a href="#!" onclick="navigate('contact');toggleMobileNav()">Contact</a>
</div>

<!-- Cart Sidebar -->
<div class="cart-overlay" id="cartOverlay" onclick="toggleCart()"></div>
<div class="cart-sidebar" id="cartSidebar">
  <div class="cart-header">
    <h3>Giỏ hàng</h3>
    <span class="cart-close" onclick="toggleCart()">x</span>
  </div>
  <div class="cart-items" id="cartItems">
    <div class="cart-empty">Gio hang cua ban dang trong</div>
  </div>
  <div class="cart-footer">
    <div class="cart-total"><span>Tong cong</span><span id="cartTotal">0&#273;</span></div>
    <button class="checkout-btn" onclick="checkout()">Thanh toán</button>
  </div>
</div>
    `;
  },

  footer() {
    return `
<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo">NEON.VN</div>
        <p>Thoi trang streetwear & high fashion danh cho the he tre Viet Nam. Dinh nghia phong cach, khong theo khuon mau.</p>
        <div class="footer-social">
          <a href="javascript:void(0)">IG</a>
          <a href="javascript:void(0)">TT</a>
          <a href="javascript:void(0)">FB</a>
          <a href="javascript:void(0)">YT</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <a href="#!" onclick="navigate('shop');return false;">Tất cả sản phẩm</a>
        <a href="#!" onclick="navigate('shop');return false;">New Arrivals</a>
        <a href="#!" onclick="navigate('sale');return false;">Sale</a>
        <a href="#!" onclick="navigate('collection');return false;">Collections</a>
      </div>
      <div class="footer-col">
        <h4>Ho tro</h4>
        <a href="javascript:void(0)">Chinh sach doi tra</a>
        <a href="javascript:void(0)">Giao hàng</a>
        <a href="javascript:void(0)">Size Guide</a>
        <a href="#!" onclick="navigate('contact');return false;">Liên hệ</a>
      </div>
      <div class="footer-col">
        <h4>Công ty</h4>
        <a href="#!" onclick="navigate('about');return false;">Về chúng tôi</a>
        <a href="#!" onclick="navigate('lookbook');return false;">Lookbook</a>
        <a href="javascript:void(0)">TuyỒn dụng</a>
        <a href="javascript:void(0)">Blog</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2026 NEON.VN - All rights reserved</div>
      <div style="display:flex;gap:24px;">
        <a href="javascript:void(0)" style="color:var(--text-muted);">Chính sách bảo mật</a>
        <a href="javascript:void(0)" style="color:var(--text-muted);">Điều khoản sử dụng</a>
      </div>
    </div>
  </div>
</footer>
    `;
  },

  toast() {
    return `
<!-- Toast -->
<div class="toast" id="toast">
  <span class="toast-icon">OK</span>
  <span id="toastMsg">Đã thêm vào giỏ hàng!</span>
</div>
    `;
  },

  backToTop() {
    return `
<button class="back-to-top" id="backToTop" type="button" aria-label="Cuộn lên đầu trang" onclick="scrollToTop()">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m18 15-6-6-6 6"/>
  </svg>
</button>
    `;
  }
};

const ProductDetailComponents = {
  tabs() {
    return `
        <!-- Tabs -->
        <div class="product-tabs">
          <div class="tab-list" role="tablist" aria-label="Thong tin san pham">
            <button class="tab-btn active" type="button" role="tab" aria-selected="true" aria-controls="tab-desc" onclick="switchTab(this,'tab-desc')">Mo ta</button>
            <button class="tab-btn" type="button" role="tab" aria-selected="false" aria-controls="tab-material" onclick="switchTab(this,'tab-material')">Chat lieu</button>
            <button class="tab-btn" type="button" role="tab" aria-selected="false" aria-controls="tab-care" onclick="switchTab(this,'tab-care')">Bao quan</button>
            <button class="tab-btn" type="button" role="tab" aria-selected="false" aria-controls="tab-shipping" onclick="switchTab(this,'tab-shipping')">Van chuyen</button>
          </div>
          <div id="tab-desc" class="tab-content active" role="tabpanel"></div>
          <div id="tab-material" class="tab-content" role="tabpanel"></div>
          <div id="tab-care" class="tab-content" role="tabpanel"></div>
          <div id="tab-shipping" class="tab-content" role="tabpanel">
            <p>Giao hang toan quoc trong 2-4 ngay lam viec</p>
            <p>Mien phi van chuyen cho don hang tu 1.000.000&#273;</p>
            <p>Doi tra mien phi trong 14 ngay</p>
          </div>
        </div>
    `;
  }
};

const PageComponents = {
  homeView() {
    return `
<!-- ========== HOME VIEW ========== -->
<div class="view active" id="view-home">

<!-- Hero -->
<section style="position:relative;height:68vh;min-height:480px;max-height:580px;display:flex;align-items:center;overflow:hidden;margin-top:72px;">
  <div style="position:absolute;inset:0;">
    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop" style="width:100%;height:100%;object-fit:cover;opacity:0.5;" alt="Hero" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
    <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(10,10,15,0.9) 0%,rgba(10,10,15,0.4) 50%,rgba(10,10,15,0.9) 100%);"></div>
  </div>
  <div class="container" style="position:relative;z-index:2;">
    <div style="max-width:700px;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:4px;color:var(--accent-cyan);margin-bottom:24px;">Bo suu tap FW 2026</div>
      <h1 style="font-size:clamp(36px,5.5vw,68px);font-weight:900;text-transform:uppercase;line-height:0.95;letter-spacing:-2px;margin-bottom:24px;">
        <span style="background:linear-gradient(135deg,#fff 0%,var(--accent-pink) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Define</span><br>
        <span style="color:var(--text);">Your</span><br>
        <span style="background:linear-gradient(135deg,var(--accent-cyan),var(--accent-purple));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Reality</span>
      </h1>
      <p style="font-size:16px;color:var(--text-muted);max-width:480px;margin-bottom:32px;line-height:1.7;">Thoa suc sang tao phong cach rieng voi nhung thiet ke streetwear dot pha, noi nghe thuat gap go thu do.</p>
      <div style="display:flex;gap:16px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="navigate('shop')">Khám phá ngay</button>
        <button class="btn btn-outline" onclick="navigate('lookbook')">Xem Lookbook</button>
      </div>
    </div>
  </div>
  <div style="position:absolute;bottom:30px;left:50%;transform:translateX(-50%);display:flex;gap:8px;align-items:center;color:var(--text-muted);font-size:12px;text-transform:uppercase;letter-spacing:2px;">
    <span>Cuon xuong</span>
    <span style="animation:bounce 2s infinite;">v</span>
  </div>
</section>

<!-- New Arrivals -->
<section style="padding:100px 0 60px;">
  <div class="container">
    <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;">
      <div>
        <div class="section-subtitle">Vừa ra mắt</div>
        <h2 class="section-title">New Arrivals</h2>
      </div>
      <button class="btn btn-ghost" onclick="navigate('shop')">Xem tất cả -></button>
    </div>
    <div class="home-product-grid">
      
    <div class="product-card" onclick="openProduct(2)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050&w=600&auto=format&fit=crop" alt="Cargo Tech Pants" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(2)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(2)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">PANTS</div>
        <div class="product-name">Cargo Tech Pants</div>
        <div class="product-price">
          <span class="price-current">750,000&#273;</span>
        </div>
      </div>
    </div>

    <div class="product-card" onclick="openProduct(3)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop" alt="Graphic Street Tee" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(3)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(3)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">TSHIRT</div>
        <div class="product-name">Graphic Street Tee</div>
        <div class="product-price">
          <span class="price-current">450,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(5)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&auto=format&fit=crop" alt="Puffer Jacket Neon" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(5)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(5)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">JACKET</div>
        <div class="product-name">Puffer Jacket Neon</div>
        <div class="product-price">
          <span class="price-current">1,800,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(7)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop" alt="Crop Top Mesh" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(7)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(7)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">TOP</div>
        <div class="product-name">Crop Top Mesh</div>
        <div class="product-price">
          <span class="price-current">380,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(9)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop" alt="Bucket Hat Leather" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(9)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(9)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">HAT</div>
        <div class="product-name">Bucket Hat Leather</div>
        <div class="product-price">
          <span class="price-current">520,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(11)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5&w=600&auto=format&fit=crop" alt="Oversized Blazer" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(11)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(11)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">BLAZER</div>
        <div class="product-name">Oversized Blazer</div>
        <div class="product-price">
          <span class="price-current">1,600,000&#273;</span>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</section>

<!-- Featured Collection -->
<section style="padding:0 0 100px;">
  <div class="container">
    <div class="section-header center">
      <div class="section-subtitle">Bo suu tap noi bat</div>
      <h2 class="section-title">Featured Collection</h2>
    </div>
    <div class="grid-2">
      <div style="position:relative;overflow:hidden;aspect-ratio:16/10;max-height:380px;cursor:pointer;" onclick="navigate('collection')">
        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop" style="width:100%;height:100%;object-fit:cover;transition:var(--transition);" class="feat-img" alt="Neon Dreams" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,15,0.9) 0%,transparent 60%);"></div>
        <div style="position:absolute;bottom:30px;left:30px;right:30px;">
          <div style="font-size:12px;color:var(--accent-cyan);text-transform:uppercase;letter-spacing:3px;margin-bottom:8px;">FW 2026</div>
          <h3 style="font-size:clamp(20px,2.5vw,32px);font-weight:900;text-transform:uppercase;line-height:1.1;margin-bottom:8px;">Neon Dreams</h3>
          <p style="color:var(--text-muted);font-size:13px;max-width:360px;line-height:1.6;margin-bottom:16px;">Anh sang neon do thi gap go high fashion. Nhung thiet ke tao bao cho dem thanh pho.</p>
          <span class="btn btn-outline" style="font-size:11px;padding:8px 20px;">Khám phá</span>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;aspect-ratio:16/10;max-height:380px;cursor:pointer;" onclick="navigate('collection')">
        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop" style="width:100%;height:100%;object-fit:cover;transition:var(--transition);" class="feat-img" alt="Urban Nomad" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,15,0.9) 0%,transparent 60%);"></div>
        <div style="position:absolute;bottom:30px;left:30px;right:30px;">
          <div style="font-size:12px;color:var(--accent-orange);text-transform:uppercase;letter-spacing:3px;margin-bottom:8px;">SS 2026</div>
          <h3 style="font-size:clamp(20px,2.5vw,32px);font-weight:900;text-transform:uppercase;line-height:1.1;margin-bottom:8px;">Urban Nomad</h3>
          <p style="color:var(--text-muted);font-size:13px;max-width:360px;line-height:1.6;margin-bottom:16px;">Phong cach du muc do thi voi chat lieu technical va thiet ke da nang cho moi hanh trinh.</p>
          <span class="btn btn-outline" style="font-size:11px;padding:8px 20px;">Khám phá</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Best Sellers -->
<section style="padding:0 0 100px;">
  <div class="container">
    <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;">
      <div>
        <div class="section-subtitle">Được yêu thích nhất</div>
        <h2 class="section-title">Best Sellers</h2>
      </div>
      <button class="btn btn-ghost" onclick="navigate('shop')">Xem tất cả -></button>
    </div>
    <div class="home-product-grid">
      
    <div class="product-card" onclick="openProduct(1)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop" alt="Neon Oversized Hoodie" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-sale">SALE</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(1)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(1)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">HOODIE</div>
        <div class="product-name">Neon Oversized Hoodie</div>
        <div class="product-price">
          <span class="price-current">890,000&#273;</span>
          <span class="price-old">1,200,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(2)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050&w=600&auto=format&fit=crop" alt="Cargo Tech Pants" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(2)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(2)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">PANTS</div>
        <div class="product-name">Cargo Tech Pants</div>
        <div class="product-price">
          <span class="price-current">750,000&#273;</span>
          
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(5)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&auto=format&fit=crop" alt="Puffer Jacket Neon" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(5)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(5)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">JACKET</div>
        <div class="product-name">Puffer Jacket Neon</div>
        <div class="product-price">
          <span class="price-current">1,800,000&#273;</span>
          
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(8)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1509631179647-0173531695f5&w=600&auto=format&fit=crop" alt="Tech Runner Sneakers" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-sale">SALE</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(8)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(8)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">SHOES</div>
        <div class="product-name">Tech Runner Sneakers</div>
        <div class="product-price">
          <span class="price-current">2,200,000&#273;</span>
          <span class="price-old">2,800,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(1)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop" alt="Neon Oversized Hoodie" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-sale">SALE</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(1)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(1)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">HOODIE</div>
        <div class="product-name">Neon Oversized Hoodie</div>
        <div class="product-price">
          <span class="price-current">890,000&#273;</span>
          <span class="price-old">1,200,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(2)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050&w=600&auto=format&fit=crop" alt="Cargo Tech Pants" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(2)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(2)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">PANTS</div>
        <div class="product-name">Cargo Tech Pants</div>
        <div class="product-price">
          <span class="price-current">750,000&#273;</span>
          
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(5)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&auto=format&fit=crop" alt="Puffer Jacket Neon" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(5)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(5)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">JACKET</div>
        <div class="product-name">Puffer Jacket Neon</div>
        <div class="product-price">
          <span class="price-current">1,800,000&#273;</span>
          
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(8)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1509631179647-0173531695f5&w=600&auto=format&fit=crop" alt="Tech Runner Sneakers" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-sale">SALE</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(8)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(8)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">SHOES</div>
        <div class="product-name">Tech Runner Sneakers</div>
        <div class="product-price">
          <span class="price-current">2,200,000&#273;</span>
          <span class="price-old">2,800,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(11)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5&w=600&auto=format&fit=crop" alt="Oversized Blazer" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(11)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(11)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">BLAZER</div>
        <div class="product-name">Oversized Blazer</div>
        <div class="product-price">
          <span class="price-current">1,600,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(13)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820&w=600&auto=format&fit=crop" alt="Slip Dress Satin" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-sale">SALE</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(13)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(13)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">DRESS</div>
        <div class="product-name">Slip Dress Satin</div>
        <div class="product-price">
          <span class="price-current">890,000&#273;</span>
          <span class="price-old">1,100,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(14)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1509631179647-0173531695f5&w=800&auto=format&fit=crop" alt="Crossbody Bag Mini" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-new">NEW</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(14)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(14)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">BAG</div>
        <div class="product-name">Crossbody Bag Mini</div>
        <div class="product-price">
          <span class="price-current">750,000&#273;</span>
        </div>
      </div>
    </div>
    
    <div class="product-card" onclick="openProduct(21)">
      <div class="product-img-wrap">
        <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&auto=format&fit=crop" alt="High Top Sneakers" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="product-tag-pos"><span class="tag tag-sale">SALE</span></div>
        <div class="product-actions">
          <button class="btn" onclick="event.stopPropagation();addToCart(21)">Thêm giỏ</button>
          <button class="btn" onclick="event.stopPropagation();openProduct(21)">Xem</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">SHOES</div>
        <div class="product-name">High Top Sneakers</div>
        <div class="product-price">
          <span class="price-current">1,900,000&#273;</span>
          <span class="price-old">2,400,000&#273;</span>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</section>

<!-- Lookbook Preview -->
<section style="padding:0 0 100px;">
  <div class="container">
    <div class="section-header center">
      <div class="section-subtitle">Thế giới thủ đô</div>
      <h2 class="section-title">Lookbook</h2>
    </div>
    <div class="grid-masonry">
      <div class="item lookbook-card" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop" class="lb-img" alt="Lookbook Night Walker" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-cyan);">Editorial</div>
            <div class="lookbook-title">Night Walker</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      <div class="item lookbook-card" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop" class="lb-img" alt="Lookbook Concrete Jungle" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-pink);">Street</div>
            <div class="lookbook-title">Concrete Jungle</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      <div class="item lookbook-card" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop" class="lb-img" alt="Lookbook Runway Ready" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-orange);">Runway</div>
            <div class="lookbook-title">Runway Ready</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      <div class="item lookbook-card" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1490481651871-32d2e7cd4c63?w=600&auto=format&fit=crop" class="lb-img" alt="Lookbook Editorial" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-purple);">Fashion</div>
            <div class="lookbook-title">Editorial</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Promo Banner -->
<section style="padding:0 0 100px;">
  <div style="position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:linear-gradient(135deg,var(--accent-pink),var(--accent-purple),var(--accent-cyan));opacity:0.15;"></div>
    <div class="container" style="position:relative;z-index:2;padding:80px 24px;text-align:center;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:4px;color:var(--accent-pink);margin-bottom:16px;">Flash Sale</div>
      <h2 style="font-size:clamp(32px,5vw,64px);font-weight:900;text-transform:uppercase;line-height:1.1;margin-bottom:20px;">Giam den 50%</h2>
      <p style="color:var(--text-muted);font-size:16px;max-width:500px;margin:0 auto 32px;line-height:1.7;">Chi trong tuan nay - san ngay nhung items hot nhat voi gia khong tuong.</p>
      <button class="btn btn-primary" onclick="navigate('sale')">Mua ngay</button>
    </div>
  </div>
</section>

<!-- Categories -->
<section style="padding:0 0 100px;">
  <div class="container">
    <div class="section-header center">
      <div class="section-subtitle">Danh mục</div>
      <h2 class="section-title">Shop by Category</h2>
    </div>
    <div class="grid-4">
      <div style="position:relative;overflow:hidden;aspect-ratio:4/3;max-height:220px;cursor:pointer;" onclick="filterAndGo('ao')">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop" style="width:100%;height:100%;object-fit:cover;transition:var(--transition);" class="cat-img" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div style="position:absolute;inset:0;background:rgba(10,10,15,0.6);display:flex;align-items:center;justify-content:center;transition:var(--transition);">
          <div style="text-align:center;">
            <div style="font-size:22px;font-weight:900;text-transform:uppercase;letter-spacing:3px;">Áo</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">12 sản phẩm</div>
          </div>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;aspect-ratio:4/3;max-height:220px;cursor:pointer;" onclick="filterAndGo('quan')">
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050&w=600&auto=format&fit=crop" style="width:100%;height:100%;object-fit:cover;transition:var(--transition);" class="cat-img" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div style="position:absolute;inset:0;background:rgba(10,10,15,0.6);display:flex;align-items:center;justify-content:center;">
          <div style="text-align:center;">
            <div style="font-size:22px;font-weight:900;text-transform:uppercase;letter-spacing:3px;">Quần</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">8 sản phẩm</div>
          </div>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;aspect-ratio:4/3;max-height:220px;cursor:pointer;" onclick="filterAndGo('vay')">
        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop" style="width:100%;height:100%;object-fit:cover;transition:var(--transition);" class="cat-img" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div style="position:absolute;inset:0;background:rgba(10,10,15,0.6);display:flex;align-items:center;justify-content:center;">
          <div style="text-align:center;">
            <div style="font-size:22px;font-weight:900;text-transform:uppercase;letter-spacing:3px;">Váy</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">5 sản phẩm</div>
          </div>
        </div>
      </div>
      <div style="position:relative;overflow:hidden;aspect-ratio:4/3;max-height:220px;cursor:pointer;" onclick="filterAndGo('phukien')">
        <img src="https://images.unsplash.com/photo-1509631179647-0173531695f5&w=800&auto=format&fit=crop" style="width:100%;height:100%;object-fit:cover;transition:var(--transition);" class="cat-img" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div style="position:absolute;inset:0;background:rgba(10,10,15,0.6);display:flex;align-items:center;justify-content:center;">
          <div style="text-align:center;">
            <div style="font-size:22px;font-weight:900;text-transform:uppercase;letter-spacing:3px;">Phu kien</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">9 sản phẩm</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Brand Story Banner -->
<section style="padding:0 0 100px;">
  <div class="container">
    <div class="brand-strip">
      <div class="brand-strip-media">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&auto=format&fit=crop" alt="NEON.VN editorial banner" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop'">
      </div>
      <div class="brand-strip-content">
        <div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:3px;color:var(--accent-cyan);margin-bottom:14px;">NEON Edit</div>
        <h2 style="font-size:clamp(28px,4vw,48px);font-weight:900;text-transform:uppercase;line-height:1.05;margin-bottom:18px;">New Drop, New Signal</h2>
        <p style="color:var(--text-muted);font-size:15px;line-height:1.8;margin-bottom:24px;">Bo suu tap moi tap trung vao layer, denim, technical pants va phu kien co diem nhan neon. Moi item duoc chon de phoi nhanh cho di hoc, di choi va shoot street style.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">
          <div><div style="font-size:24px;font-weight:900;color:var(--accent-pink);">24h</div><div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;">Xu ly don</div></div>
          <div><div style="font-size:24px;font-weight:900;color:var(--accent-cyan);">14 ngay</div><div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;">Doi tra</div></div>
          <div><div style="font-size:24px;font-weight:900;color:var(--accent-orange);">4.9/5</div><div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;">Danh gia</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Reviews -->
<section style="padding:0 0 100px;">
  <div class="container">
    <div class="section-header center">
      <div class="section-subtitle">Khách hàng nói gì</div>
      <h2 class="section-title">Reviews</h2>
    </div>
    <div class="review-summary">
      <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&auto=format&fit=crop" alt="Customer review highlight" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop'">
      <div class="review-summary-content">
        <div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:3px;color:var(--accent-yellow);margin-bottom:12px;">Verified buyers</div>
        <div style="font-size:clamp(36px,5vw,56px);font-weight:900;line-height:1;margin-bottom:10px;">4.9/5</div>
        <p style="color:var(--text-muted);font-size:15px;line-height:1.8;margin-bottom:22px;">Hon 1.200 luot danh gia tap trung vao form ao, chat lieu va toc do giao hang. Cac review ben duoi duoc dua ve dang grid de xem nhanh hon.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <span class="tag tag-new">Fast shipping</span>
          <span class="tag tag-sale">Best fit</span>
          <span class="tag tag-hot">Street ready</span>
        </div>
      </div>
    </div>
    <div class="review-grid">
      
    <div style="background:var(--bg-card);border:1px solid var(--border);padding:28px;min-width:320px;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent-pink),var(--accent-purple));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;">MA</div>
        <div>
          <div style="font-weight:700;font-size:14px;">Minh Anh</div>
          <div style="font-size:12px;color:var(--text-muted);">15/08/2026</div>
        </div>
      </div>
      <div style="color:var(--accent-yellow);font-size:14px;margin-bottom:12px;letter-spacing:2px;"><-&<-&<-&<-&<-&</div>
      <p style="color:var(--text-muted);font-size:14px;line-height:1.7;">"Chat luong san pham vuot mong doi! Hoodie oversized dung chat streetwear, form chuan va vai day dan."</p>
    </div>
    
    <div style="background:var(--bg-card);border:1px solid var(--border);padding:28px;min-width:320px;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent-pink),var(--accent-purple));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;">HL</div>
        <div>
          <div style="font-weight:700;font-size:14px;">Hoàng Long</div>
          <div style="font-size:12px;color:var(--text-muted);">12/08/2026</div>
        </div>
      </div>
      <div style="color:var(--accent-yellow);font-size:14px;margin-bottom:12px;letter-spacing:2px;"><-&<-&<-&<-&<-&</div>
      <p style="color:var(--text-muted);font-size:14px;line-height:1.7;">"Giao hang nhanh, dong goi can than. Quan cargo tech pants rat dep va thoai mai. Se mua them!"</p>
    </div>
    
    <div style="background:var(--bg-card);border:1px solid var(--border);padding:28px;min-width:320px;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent-pink),var(--accent-purple));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;">TH</div>
        <div>
          <div style="font-weight:700;font-size:14px;">Thu Hà</div>
          <div style="font-size:12px;color:var(--text-muted);">10/08/2026</div>
        </div>
      </div>
      <div style="color:var(--accent-yellow);font-size:14px;margin-bottom:12px;letter-spacing:2px;"><-&<-&<-&<-&<-&</div>
      <p style="color:var(--text-muted);font-size:14px;line-height:1.7;">"Vay slip dress satin dep khong tuong, chat lieu mem mai va om dang hoan hao. Di tiec duoc khen nhieu."</p>
    </div>
    
    <div style="background:var(--bg-card);border:1px solid var(--border);padding:28px;min-width:320px;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent-pink),var(--accent-purple));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;">DH</div>
        <div>
          <div style="font-weight:700;font-size:14px;">Đức Huy</div>
          <div style="font-size:12px;color:var(--text-muted);">08/08/2026</div>
        </div>
      </div>
      <div style="color:var(--accent-yellow);font-size:14px;margin-bottom:12px;letter-spacing:2px;"><-&<-&<-&<-&<- </div>
      <p style="color:var(--text-muted);font-size:14px;line-height:1.7;">"Giay tech runner sieu nhe va em chan. Thiet ke futuristic dung gu cua minh. Recommend!"</p>
    </div>
    
    <div style="background:var(--bg-card);border:1px solid var(--border);padding:28px;min-width:320px;flex-shrink:0;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent-pink),var(--accent-purple));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;">LC</div>
        <div>
          <div style="font-weight:700;font-size:14px;">Lan Chi</div>
          <div style="font-size:12px;color:var(--text-muted);">05/08/2026</div>
        </div>
      </div>
      <div style="color:var(--accent-yellow);font-size:14px;margin-bottom:12px;letter-spacing:2px;"><-&<-&<-&<-&<-&</div>
      <p style="color:var(--text-muted);font-size:14px;line-height:1.7;">"Tui crossbody mini xinh xan, day xich chac chan. Phoi do street style rat hop."</p>
    </div>
    
    </div>
  </div>
</section>

<!-- Newsletter -->
<section style="padding:0 0 100px;">
  <div class="container">
    <div style="background:var(--bg-elevated);border:1px solid var(--border);padding:clamp(40px,6vw,80px);text-align:center;">
      <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:4px;color:var(--accent-cyan);margin-bottom:16px;">Newsletter</div>
      <h2 style="font-size:clamp(28px,4vw,48px);font-weight:900;text-transform:uppercase;line-height:1.1;margin-bottom:16px;">Join the Movement</h2>
      <p style="color:var(--text-muted);font-size:16px;max-width:480px;margin:0 auto 32px;line-height:1.7;">Dang ky de nhan thong tin ve bo suu tap moi, uu dai doc quyen va cau chuyen thoi trang.</p>
      <form onsubmit="event.preventDefault();showToast('ĐĒng ký thành công!');this.reset();" style="display:flex;gap:12px;max-width:480px;margin:0 auto;flex-wrap:wrap;">
        <input type="email" placeholder="Email của bạn" required style="flex:1;min-width:200px;padding:14px 20px;background:var(--bg);border:1px solid var(--border);color:var(--text);font-family:inherit;font-size:14px;outline:none;">
        <button type="submit" class="btn btn-primary">ĐĒng ký</button>
      </form>
    </div>
  </div>
</section>

</div>
    `;
  },

  shopView() {
    return `
<!-- ========== SHOP VIEW ========== -->
<div class="view" id="view-shop">
<section style="padding:120px 0 60px;">
  <div class="container">
    <div class="section-header">
      <div class="section-subtitle">Tất cả sản phẩm</div>
      <h2 class="section-title">Shop</h2>
    </div>
    <div style="display:grid;grid-template-columns:240px 1fr;gap:40px;">
      <!-- Sidebar Filters -->
      <aside style="border-right:1px solid var(--border);padding-right:24px;">
        <div style="margin-bottom:32px;">
          <h4 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">Danh mục</h4>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-cat" value="all" checked onchange="filterShop(this.value)" style="accent-color:var(--accent-pink);"> Tất cả
            </label>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-cat" value="ao" onchange="filterShop(this.value)" style="accent-color:var(--accent-pink);"> Áo
            </label>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-cat" value="quan" onchange="filterShop(this.value)" style="accent-color:var(--accent-pink);"> Quần
            </label>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-cat" value="vay" onchange="filterShop(this.value)" style="accent-color:var(--accent-pink);"> Váy
            </label>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-cat" value="giay" onchange="filterShop(this.value)" style="accent-color:var(--accent-pink);"> Giày
            </label>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-cat" value="phukien" onchange="filterShop(this.value)" style="accent-color:var(--accent-pink);"> Phụ kiện
            </label>
          </div>
        </div>
        <div style="margin-bottom:32px;">
          <h4 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">Khoảng giá</h4>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-price" value="all" checked onchange="filterShopPrice(this.value)" style="accent-color:var(--accent-pink);"> Tất cả
            </label>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-price" value="under500" onchange="filterShopPrice(this.value)" style="accent-color:var(--accent-pink);"> Dưới 500K
            </label>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-price" value="500to1000" onchange="filterShopPrice(this.value)" style="accent-color:var(--accent-pink);"> 500K - 1M
            </label>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;color:var(--text-muted);font-size:14px;">
              <input type="radio" name="shop-price" value="over1000" onchange="filterShopPrice(this.value)" style="accent-color:var(--accent-pink);"> Trên 1M
            </label>
          </div>
        </div>
        <div>
          <h4 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">Size</h4>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <button class="size-chip" onclick="toggleSizeChip(this)" style="padding:6px 14px;border:1px solid var(--border);background:var(--bg-card);font-size:12px;cursor:pointer;transition:var(--transition);">S</button>
            <button class="size-chip" onclick="toggleSizeChip(this)" style="padding:6px 14px;border:1px solid var(--border);background:var(--bg-card);font-size:12px;cursor:pointer;transition:var(--transition);">M</button>
            <button class="size-chip" onclick="toggleSizeChip(this)" style="padding:6px 14px;border:1px solid var(--border);background:var(--bg-card);font-size:12px;cursor:pointer;transition:var(--transition);">L</button>
            <button class="size-chip" onclick="toggleSizeChip(this)" style="padding:6px 14px;border:1px solid var(--border);background:var(--bg-card);font-size:12px;cursor:pointer;transition:var(--transition);">XL</button>
          </div>
        </div>
      </aside>
      <!-- Product Grid -->
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
          <div style="font-size:14px;color:var(--text-muted);"><span id="shopCount">24</span> sản phẩm</div>
          <select id="shopSort" onchange="sortShop(this.value)" style="padding:10px 16px;background:var(--bg-card);border:1px solid var(--border);color:var(--text);font-family:inherit;font-size:13px;outline:none;cursor:pointer;">
            <option value="newest">Mới nhất</option>
            <option value="price-asc">Giá: Thấp đến cao</option>
            <option value="price-desc">Giá: Cao đến thấp</option>
            <option value="sale">Khuyến mãi</option>
          </select>
        </div>
        <div id="shopGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;">
          <!-- Products injected by JS -->
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    `;
  },

  productDetailView() {
    return `
<!-- ========== PRODUCT DETAIL VIEW ========== -->
<div class="view" id="view-product">
<section style="padding:120px 0 60px;">
  <div class="container">
    <div style="margin-bottom:24px;">
      <button class="btn btn-ghost" onclick="goBack()" style="font-size:13px;"><- Quay lại</button>
    </div>
    <div class="product-detail-layout">
      <!-- Gallery -->
      <div class="product-detail-gallery">
        <div class="product-detail-main">
          <img id="pdMainImg" src="" alt="Product" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        </div>
        <div id="pdThumbs" class="product-detail-thumbs">
          <!-- Thumbnails injected by JS -->
        </div>
      </div>
      <!-- Info -->
      <div>
        <div id="pdTag" style="margin-bottom:12px;"></div>
        <div id="pdCategory" style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;"></div>
        <h1 id="pdName" style="font-size:clamp(24px,3vw,40px);font-weight:900;text-transform:uppercase;line-height:1.1;margin-bottom:16px;"></h1>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">
          <span id="pdPrice" style="font-size:28px;font-weight:800;color:var(--accent-pink);"></span>
          <span id="pdOldPrice" style="font-size:18px;color:var(--text-muted);text-decoration:line-through;"></span>
        </div>
        <p id="pdDesc" style="color:var(--text-muted);font-size:15px;line-height:1.8;margin-bottom:32px;"></p>

        <!-- Colors -->
        <div style="margin-bottom:24px;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Màu sắc</div>
          <div id="pdColors" style="display:flex;gap:10px;"></div>
        </div>

        <!-- Sizes -->
        <div style="margin-bottom:32px;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Size</div>
          <div id="pdSizes" style="display:flex;gap:8px;flex-wrap:wrap;"></div>
        </div>

        <!-- Actions -->
        <div style="display:flex;gap:12px;margin-bottom:40px;">
          <div style="display:flex;align-items:center;border:1px solid var(--border);">
            <button onclick="changePdQty(-1)" style="width:48px;height:48px;display:flex;align-items:center;justify-content:center;font-size:18px;">-</button>
            <span id="pdQty" style="width:48px;text-align:center;font-weight:700;">1</span>
            <button onclick="changePdQty(1)" style="width:48px;height:48px;display:flex;align-items:center;justify-content:center;font-size:18px;">+</button>
          </div>
          <button class="btn btn-primary" onclick="addPdToCart()" style="flex:1;font-size:14px;">Thêm vào giỏ - <span id="pdTotalPrice"></span></button>
        </div>

        ${ProductDetailComponents.tabs()}
      </div>
    </div>

    <!-- Related Products -->
    <div style="margin-top:80px;">
      <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;">
        <div>
          <div class="section-subtitle">Có thỒ bạn thích</div>
          <h2 class="section-title" style="font-size:32px;">Sản phẩm liên quan</h2>
        </div>
      </div>
      <div id="pdRelated" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;"></div>
    </div>

    <!-- Outfit Suggestions -->
    <div style="margin-top:80px;">
      <div class="section-header">
        <div class="section-subtitle">Goi y phoi do</div>
        <h2 class="section-title" style="font-size:32px;">Complete the Look</h2>
      </div>
      <div id="pdOutfit" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;"></div>
    </div>
  </div>
</section>
</div>
    `;
  },

  collectionView() {
    return `
<!-- ========== COLLECTION VIEW ========== -->
<div class="view" id="view-collection">
<section style="padding:120px 0 60px;">
  <div class="container">
    <div class="collection-hero">
      <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400&auto=format&fit=crop" alt="Collections banner" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop'">
      <div class="collection-hero-content">
        <div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:4px;color:var(--accent-cyan);margin-bottom:14px;">Seasonal edits</div>
        <h2 style="font-size:clamp(40px,7vw,78px);font-weight:900;text-transform:uppercase;line-height:0.95;margin-bottom:18px;">Collections</h2>
        <p style="color:var(--text-muted);font-size:16px;max-width:560px;line-height:1.8;">Chon nhanh cac capsule noi bat: neon layer, do technical hang ngay va phu kien Y2K. Moi bo suu tap gom san pham da duoc phoi san theo vibe rieng.</p>
      </div>
    </div>

    <div class="collection-tabs">
      <button onclick="openCollection('NEON DREAMS',[1, 5, 7, 13])">Neon Dreams</button>
      <button onclick="openCollection('URBAN NOMAD',[2, 6, 17, 18])">Urban Nomad</button>
      <button onclick="openCollection('Y2K REVIVAL',[9, 14, 15, 19])">Y2K Revival</button>
      <button onclick="filterAndGo('ao')">Ao khoac</button>
      <button onclick="filterAndGo('phukien')">Phu kien</button>
      <button onclick="navigate('sale')">Sale capsule</button>
    </div>

    <div class="collection-rail">
      <div class="collection-card" onclick="openCollection('NEON DREAMS',[1, 5, 7, 13])">
        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&auto=format&fit=crop" alt="Neon Dreams" class="col-img" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="collection-card-body">
          <div style="font-size:11px;color:var(--accent-cyan);text-transform:uppercase;letter-spacing:3px;margin-bottom:10px;">FW 2026 · 4 items</div>
          <h3 style="font-size:28px;font-weight:900;text-transform:uppercase;line-height:1;margin-bottom:12px;">NEON DREAMS</h3>
          <p style="color:var(--text-muted);font-size:13px;line-height:1.7;margin-bottom:18px;">Layer ruc sang, jacket phao va tone mau neon cho buoi toi thanh pho.</p>
          <span class="btn btn-outline" style="font-size:11px;padding:10px 18px;">Xem bo suu tap</span>
        </div>
      </div>

      <div class="collection-card" onclick="openCollection('URBAN NOMAD',[2, 6, 17, 18])">
        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700&auto=format&fit=crop" alt="Urban Nomad" class="col-img" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="collection-card-body">
          <div style="font-size:11px;color:var(--accent-orange);text-transform:uppercase;letter-spacing:3px;margin-bottom:10px;">SS 2026 · 4 items</div>
          <h3 style="font-size:28px;font-weight:900;text-transform:uppercase;line-height:1;margin-bottom:12px;">URBAN NOMAD</h3>
          <p style="color:var(--text-muted);font-size:13px;line-height:1.7;margin-bottom:18px;">Technical pants, vest va silhouette gon de di chuyen ca ngay.</p>
          <span class="btn btn-outline" style="font-size:11px;padding:10px 18px;">Xem bo suu tap</span>
        </div>
      </div>

      <div class="collection-card" onclick="openCollection('Y2K REVIVAL',[9, 14, 15, 19])">
        <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&auto=format&fit=crop" alt="Y2K Revival" class="col-img" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="collection-card-body">
          <div style="font-size:11px;color:var(--accent-pink);text-transform:uppercase;letter-spacing:3px;margin-bottom:10px;">Resort 2026 · 4 items</div>
          <h3 style="font-size:28px;font-weight:900;text-transform:uppercase;line-height:1;margin-bottom:12px;">Y2K REVIVAL</h3>
          <p style="color:var(--text-muted);font-size:13px;line-height:1.7;margin-bottom:18px;">Phu kien, mesh top va metallic detail cho outfit noi bat hon.</p>
          <span class="btn btn-outline" style="font-size:11px;padding:10px 18px;">Xem bo suu tap</span>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    `;
  },

  lookbookView() {
    return `
<!-- ========== LOOKBOOK VIEW ========== -->
<div class="view" id="view-lookbook">
<section style="padding:120px 0 60px;">
  <div class="container">
    <div class="section-header center">
      <div class="section-subtitle">Thế giới thủ đô</div>
      <h2 class="section-title">Lookbook</h2>
    </div>
    <p style="text-align:center;color:var(--text-muted);max-width:600px;margin:0 auto 48px;line-height:1.8;">
      Những hình ảnh được chụp tại các địa điểm biểu tượng trên thế giới, 
      nơi streetwear gặp gỡ nghệ thuật và văn hóa đô thị.
    </p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;">
      
      <div class="lookbook-card" style="grid-row:span 2;min-height:480px;" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop" class="lb-img" alt="NIGHT WALKER" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-cyan);">Street style after dark</div>
            <div class="lookbook-title">NIGHT WALKER</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      
      <div class="lookbook-card" style="min-height:280px;" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop" class="lb-img" alt="CONCRETE JUNGLE" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-cyan);">Urban exploration</div>
            <div class="lookbook-title">CONCRETE JUNGLE</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      
      <div class="lookbook-card" style="min-height:280px;" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop" class="lb-img" alt="RUNWAY READY" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-cyan);">High fashion meets street</div>
            <div class="lookbook-title">RUNWAY READY</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      
      <div class="lookbook-card" style="min-height:280px;" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop" class="lb-img" alt="CITY CHIC" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-cyan);">Effortless elegance</div>
            <div class="lookbook-title">CITY CHIC</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      
      <div class="lookbook-card" style="min-height:280px;" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop" class="lb-img" alt="LONDON CALLING" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-cyan);">British tailoring reimagined</div>
            <div class="lookbook-title">LONDON CALLING</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      
      <div class="lookbook-card" style="min-height:280px;" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&auto=format&fit=crop" class="lb-img" alt="CASUAL LUXE" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-cyan);">Everyday sophistication</div>
            <div class="lookbook-title">CASUAL LUXE</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      
      <div class="lookbook-card" style="min-height:280px;" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1490481651871-32d2e7cd4c63?w=600&auto=format&fit=crop" class="lb-img" alt="EDITORIAL" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-cyan);">Fashion photography</div>
            <div class="lookbook-title">EDITORIAL</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      
      <div class="lookbook-card" style="min-height:280px;" onclick="navigate('lookbook')">
        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop" class="lb-img" alt="COUTURE" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
        <div class="lookbook-overlay">
          <div class="lookbook-content">
            <div class="lookbook-tag" style="color:var(--accent-cyan);">Haute couture inspiration</div>
            <div class="lookbook-title">COUTURE</div>
          </div>
          <div class="lookbook-btn-badge">Khám phá &rarr;</div>
        </div>
      </div>
      
    </div>
  </div>
</section>
</div>
    `;
  },

  saleView() {
    return `
<!-- ========== SALE VIEW ========== -->
<div class="view" id="view-sale">
<section style="padding:120px 0 60px;">
  <div class="container">
    <div class="sale-hero">
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&auto=format&fit=crop" alt="Sale banner" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop'">
      <div class="sale-hero-content">
        <div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:4px;color:var(--accent-pink);margin-bottom:14px;">Midnight Sale</div>
        <h2 style="font-size:clamp(44px,8vw,88px);font-weight:900;text-transform:uppercase;line-height:0.92;margin-bottom:18px;">Up to 50%</h2>
        <p style="color:var(--text-muted);font-size:16px;max-width:540px;line-height:1.8;margin-bottom:28px;">Banner uu dai rieng cho cac item ban chay: hoodie, denim, sneaker va slip dress. So luong gioi han trong dot sale nay.</p>
        <button class="btn btn-primary" onclick="filterShopPrice('all');navigate('shop')">Mua ngay</button>
      </div>
    </div>

    <div class="sale-promo-grid">
      <div class="sale-promo"><div style="font-size:12px;color:var(--accent-cyan);font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">Voucher</div><div style="font-size:24px;font-weight:900;margin-bottom:6px;">-100K</div><p style="color:var(--text-muted);font-size:13px;line-height:1.6;">Cho don tu 1.000.000d, ap dung khi thanh toan.</p></div>
      <div class="sale-promo"><div style="font-size:12px;color:var(--accent-pink);font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">Combo</div><div style="font-size:24px;font-weight:900;margin-bottom:6px;">Mua 2 giam them 10%</div><p style="color:var(--text-muted);font-size:13px;line-height:1.6;">Ap dung cho ao, quan va phu kien trong danh sach sale.</p></div>
      <div class="sale-promo"><div style="font-size:12px;color:var(--accent-orange);font-weight:800;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">Shipping</div><div style="font-size:24px;font-weight:900;margin-bottom:6px;">Free ship</div><p style="color:var(--text-muted);font-size:13px;line-height:1.6;">Mien phi van chuyen cho cac don hang tu 700.000d.</p></div>
    </div>

    <div class="section-header" style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;">
      <div>
        <div class="section-subtitle">Selected deals</div>
        <h2 class="section-title" style="font-size:34px;">San pham dang sale</h2>
      </div>
      <button class="btn btn-ghost" onclick="navigate('shop')">Xem tat ca</button>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;">
      <div class="product-card" onclick="openProduct(1)"><div class="product-img-wrap"><img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop" alt="Neon Oversized Hoodie" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'"><div class="product-tag-pos"><span class="tag tag-sale">-25%</span></div><div class="product-actions"><button class="btn" onclick="event.stopPropagation();addToCart(1)">Them gio</button><button class="btn" onclick="event.stopPropagation();openProduct(1)">Xem</button></div></div><div class="product-info"><div class="product-category">HOODIE</div><div class="product-name">Neon Oversized Hoodie</div><div class="product-price"><span class="price-current">890,000d</span><span class="price-old">1,200,000d</span></div></div></div>
      <div class="product-card" onclick="openProduct(4)"><div class="product-img-wrap"><img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7&w=600&auto=format&fit=crop" alt="Vintage Denim Jacket" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'"><div class="product-tag-pos"><span class="tag tag-sale">-19%</span></div><div class="product-actions"><button class="btn" onclick="event.stopPropagation();addToCart(4)">Them gio</button><button class="btn" onclick="event.stopPropagation();openProduct(4)">Xem</button></div></div><div class="product-info"><div class="product-category">JACKET</div><div class="product-name">Vintage Denim Jacket</div><div class="product-price"><span class="price-current">1,200,000d</span><span class="price-old">1,500,000d</span></div></div></div>
      <div class="product-card" onclick="openProduct(8)"><div class="product-img-wrap"><img src="https://images.unsplash.com/photo-1509631179647-0173531695f5&w=600&auto=format&fit=crop" alt="Tech Runner Sneakers" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'"><div class="product-tag-pos"><span class="tag tag-sale">-21%</span></div><div class="product-actions"><button class="btn" onclick="event.stopPropagation();addToCart(8)">Them gio</button><button class="btn" onclick="event.stopPropagation();openProduct(8)">Xem</button></div></div><div class="product-info"><div class="product-category">SHOES</div><div class="product-name">Tech Runner Sneakers</div><div class="product-price"><span class="price-current">2,200,000d</span><span class="price-old">2,800,000d</span></div></div></div>
      <div class="product-card" onclick="openProduct(13)"><div class="product-img-wrap"><img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820&w=600&auto=format&fit=crop" alt="Slip Dress Satin" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'"><div class="product-tag-pos"><span class="tag tag-sale">-19%</span></div><div class="product-actions"><button class="btn" onclick="event.stopPropagation();addToCart(13)">Them gio</button><button class="btn" onclick="event.stopPropagation();openProduct(13)">Xem</button></div></div><div class="product-info"><div class="product-category">DRESS</div><div class="product-name">Slip Dress Satin</div><div class="product-price"><span class="price-current">890,000d</span><span class="price-old">1,100,000d</span></div></div></div>
    </div>
  </div>
</section>
</div>
    `;
  },

  aboutView() {
    return `
<!-- ========== ABOUT VIEW ========== -->
<div class="view" id="view-about">
<section style="padding:120px 0 60px;">
  <div class="container">
    <div class="section-header center">
      <div class="section-subtitle">Cau chuyen</div>
      <h2 class="section-title">About Us</h2>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;margin-bottom:80px;">
      <div>
        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop" style="width:100%;max-height:420px;aspect-ratio:4/3;object-fit:cover;border-radius:4px;" alt="About" onerror="this.src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop'">
      </div>
      <div>
        <h3 style="font-size:28px;font-weight:800;text-transform:uppercase;line-height:1.2;margin-bottom:20px;">Born in the Streets,<br><span style="color:var(--accent-pink);">Raised by the City</span></h3>
        <p style="color:var(--text-muted);font-size:15px;line-height:1.8;margin-bottom:20px;">
          NEON.VN duoc thanh lap vao nam 2024 voi su menh mang den nhung thiet ke streetwear 
          dot pha cho the he tre Viet Nam. Chung toi tin rang thoi trang khong chi la quan ao - 
          do la ngon ngu, la tuyen ngon, la cach ban ke cau chuyen cua minh voi the gioi.
        </p>
        <p style="color:var(--text-muted);font-size:15px;line-height:1.8;margin-bottom:32px;">
          Moi bo suu tap deu duoc lay cam hung tu nhip song do thi, nghe thuat duong pho 
          va van hoa Gen Z. Chung toi hop tac voi cac nghe si, designer dia phuong de tao ra 
          nhung san pham mang dam ban sac Viet Nam nhung van hoa nhip voi xu huong quoc te.
        </p>
        <div style="display:flex;gap:32px;">
          <div>
            <div style="font-size:36px;font-weight:900;color:var(--accent-pink);">50K+</div>
            <div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px;">Khách hàng</div>
          </div>
          <div>
            <div style="font-size:36px;font-weight:900;color:var(--accent-cyan);">200+</div>
            <div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px;">Sản phẩm</div>
          </div>
          <div>
            <div style="font-size:36px;font-weight:900;color:var(--accent-purple);">15+</div>
            <div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px;">Bo suu tap</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Values -->
    <div style="margin-bottom:80px;">
      <div class="section-header center">
        <div class="section-subtitle">Gia tri cot loi</div>
        <h2 class="section-title" style="font-size:32px;">Our Values</h2>
      </div>
      <div class="grid-3">
        <div style="background:var(--bg-card);border:1px solid var(--border);padding:40px;text-align:center;">
          <div style="font-size:40px;margin-bottom:16px;">Recycle</div>
          <h4 style="font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Bền vững</h4>
          <p style="color:var(--text-muted);font-size:14px;line-height:1.7;">Chung toi uu tien chat lieu than thien moi truong va quy trinh san xuat co trach nhiem.</p>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--border);padding:40px;text-align:center;">
          <div style="font-size:40px;margin-bottom:16px;">Art</div>
          <h4 style="font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Sáng tạo</h4>
          <p style="color:var(--text-muted);font-size:14px;line-height:1.7;">Moi thiet ke la mot tac pham nghe thuat, duoc cham chut tung chi tiet.</p>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--border);padding:40px;text-align:center;">
          <div style="font-size:40px;margin-bottom:16px;">Community</div>
          <h4 style="font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Cong dong</h4>
          <p style="color:var(--text-muted);font-size:14px;line-height:1.7;">Xay dung cong dong yeu thoi trang, noi moi nguoi duoc tu do the hien ban than.</p>
        </div>
      </div>
    </div>

    <!-- Team -->
    <div>
      <div class="section-header center">
        <div class="section-subtitle">Doi ngu</div>
        <h2 class="section-title" style="font-size:32px;">The Team</h2>
      </div>
      <div class="grid-4">
        <div style="text-align:center;">
          <div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,var(--accent-pink),var(--accent-purple));margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;">NT</div>
          <h4 style="font-size:16px;font-weight:700;">Nguyen Thanh</h4>
          <div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px;">Founder & Creative Director</div>
        </div>
        <div style="text-align:center;">
          <div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,var(--accent-cyan),var(--accent-purple));margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;">LM</div>
          <h4 style="font-size:16px;font-weight:700;">Lê Minh</h4>
          <div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px;">Head of Design</div>
        </div>
        <div style="text-align:center;">
          <div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,var(--accent-orange),var(--accent-pink));margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;">PH</div>
          <h4 style="font-size:16px;font-weight:700;">Phạm Hà</h4>
          <div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px;">Brand Manager</div>
        </div>
        <div style="text-align:center;">
          <div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,var(--accent-purple),var(--accent-cyan));margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;">TV</div>
          <h4 style="font-size:16px;font-weight:700;">Trần Vũ</h4>
          <div style="font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px;">Lead Photographer</div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    `;
  },

  contactView() {
    return `
<!-- ========== CONTACT VIEW ========== -->
<div class="view" id="view-contact">
<section style="padding:120px 0 60px;">
  <div class="container">
    <div class="section-header center">
      <div class="section-subtitle">Lien he</div>
      <h2 class="section-title">Get in Touch</h2>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;">
      <div>
        <h3 style="font-size:24px;font-weight:800;text-transform:uppercase;margin-bottom:24px;">Gửi tin nhắn</h3>
        <form onsubmit="event.preventDefault();showToast('Tin nhan da duoc gui!');this.reset();">
          <div style="margin-bottom:20px;">
            <label style="display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;color:var(--text-muted);">Họ tên</label>
            <input type="text" required style="width:100%;padding:14px 16px;background:var(--bg-card);border:1px solid var(--border);color:var(--text);font-family:inherit;font-size:14px;outline:none;">
          </div>
          <div style="margin-bottom:20px;">
            <label style="display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;color:var(--text-muted);">Email</label>
            <input type="email" required style="width:100%;padding:14px 16px;background:var(--bg-card);border:1px solid var(--border);color:var(--text);font-family:inherit;font-size:14px;outline:none;">
          </div>
          <div style="margin-bottom:20px;">
            <label style="display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;color:var(--text-muted);">Chu de</label>
            <select style="width:100%;padding:14px 16px;background:var(--bg-card);border:1px solid var(--border);color:var(--text);font-family:inherit;font-size:14px;outline:none;cursor:pointer;">
              <option>Ho tro don hang</option>
              <option>Tư vấn sản phẩm</option>
              <option>Hợp tác</option>
              <option>Khác</option>
            </select>
          </div>
          <div style="margin-bottom:24px;">
            <label style="display:block;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;color:var(--text-muted);">Noi dung</label>
            <textarea required rows="5" style="width:100%;padding:14px 16px;background:var(--bg-card);border:1px solid var(--border);color:var(--text);font-family:inherit;font-size:14px;outline:none;resize:vertical;"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Gửi tin nhắn</button>
        </form>
      </div>
      <div>
        <h3 style="font-size:24px;font-weight:800;text-transform:uppercase;margin-bottom:24px;">Thông tin</h3>
        <div style="margin-bottom:32px;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--text-muted);margin-bottom:8px;">Dia chi</div>
          <p style="font-size:15px;line-height:1.7;">123 Nguyen Van A, Quan 1<br>TP. Ho Chi Minh, Viet Nam</p>
        </div>
        <div style="margin-bottom:32px;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--text-muted);margin-bottom:8px;">Email</div>
          <p style="font-size:15px;line-height:1.7;">hello@neon.vn<br>support@neon.vn</p>
        </div>
        <div style="margin-bottom:32px;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--text-muted);margin-bottom:8px;">Hotline</div>
          <p style="font-size:15px;line-height:1.7;">1900 1234<br>Thứ 2 - Thứ 7: 9:00 - 21:00</p>
        </div>
        <div style="margin-bottom:32px;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--text-muted);margin-bottom:8px;">Mang xa hoi</div>
          <div style="display:flex;gap:12px;">
            <a href="javascript:void(0)" style="padding:10px 20px;background:var(--bg-card);border:1px solid var(--border);font-size:13px;font-weight:600;transition:var(--transition);">Instagram</a>
            <a href="javascript:void(0)" style="padding:10px 20px;background:var(--bg-card);border:1px solid var(--border);font-size:13px;font-weight:600;transition:var(--transition);">TikTok</a>
            <a href="javascript:void(0)" style="padding:10px 20px;background:var(--bg-card);border:1px solid var(--border);font-size:13px;font-weight:600;transition:var(--transition);">Facebook</a>
          </div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--border);padding:24px;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--accent-pink);margin-bottom:8px;">Showroom</div>
          <p style="color:var(--text-muted);font-size:14px;line-height:1.7;">Ghe tham showroom cua chung toi de trai nghiem truc tiep cac bo suu tap moi nhat.</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
    `;
  },

  views() {
    return [
      this.homeView(),
      this.shopView(),
      this.productDetailView(),
      this.collectionView(),
      this.lookbookView(),
      this.saleView(),
      this.aboutView(),
      this.contactView()
    ].join('');
  }
};

function renderApp() {
  document.body.innerHTML = [
    SharedComponents.chrome(),
    PageComponents.views(),
    SharedComponents.footer(),
    SharedComponents.toast(),
    SharedComponents.backToTop()
  ].join('');
}

renderApp();
