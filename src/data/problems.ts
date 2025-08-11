import type { Problem } from '../types'

export const problems: Problem[] = [
  // グリッドレイアウト系
  {
    id: 'grid-1',
    category: 'grid-layout',
    title: 'グリッドアイテムのズレ',
    description: '1つのグリッドアイテムが1px下にずれています',
    baseHTML: `
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
      </div>
    `,
    baseCSS: `
      body {
        background: #ffffff;
        margin: 0;
        padding: 0;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        gap: 20px;
        padding: 40px;
        background: #ffffff;
      }
      .grid-item {
        width: 100px;
        height: 100px;
        background: #3498db;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
    `,
    modifiedHTML: `
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item" style="position: relative; top: 1px;">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
      </div>
    `,
    modifiedCSS: `
      body {
        background: #ffffff;
        margin: 0;
        padding: 0;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        gap: 20px;
        padding: 40px;
        background: #ffffff;
      }
      .grid-item {
        width: 100px;
        height: 100px;
        background: #3498db;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
    `,
    answerArea: {
      x: 260,
      y: 60,
      width: 100,
      height: 100
    }
  },
  
  // ボーダー・境界線系
  {
    id: 'border-1',
    category: 'border',
    title: 'ボーダーラジウスの違い',
    description: '1つのカードだけborder-radiusが1px違います',
    baseHTML: `
      <div class="card-container">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
      </div>
    `,
    baseCSS: `
      .card-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
      }
      .card {
        width: 200px;
        height: 150px;
        background: white;
        border: 2px solid #ddd;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
    `,
    modifiedHTML: `
      <div class="card-container">
        <div class="card">Card 1</div>
        <div class="card" style="border-radius: 11px;">Card 2</div>
        <div class="card">Card 3</div>
      </div>
    `,
    modifiedCSS: `
      .card-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
      }
      .card {
        width: 200px;
        height: 150px;
        background: white;
        border: 2px solid #ddd;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
    `,
    answerArea: {
      x: 270,
      y: 40,
      width: 200,
      height: 150
    }
  },
  
  // 間隔・マージン系
  {
    id: 'spacing-1',
    category: 'spacing',
    title: 'リスト項目の間隔',
    description: '1つのリスト項目の間隔が1px違います',
    baseHTML: `
      <ul class="menu-list">
        <li class="menu-item">ホーム</li>
        <li class="menu-item">サービス</li>
        <li class="menu-item">製品</li>
        <li class="menu-item">会社情報</li>
        <li class="menu-item">お問い合わせ</li>
      </ul>
    `,
    baseCSS: `
      .menu-list {
        list-style: none;
        padding: 30px;
        margin: 0;
        background: #ffffff;
      }
      .menu-item {
        padding: 15px 20px;
        margin-bottom: 10px;
        background: #f8f9fa;
        color: #333333;
        border: 1px solid #e9ecef;
        cursor: pointer;
        transition: background 0.3s;
      }
      .menu-item:hover {
        background: #e9ecef;
      }
      .menu-item:last-child {
        margin-bottom: 0;
      }
    `,
    modifiedHTML: `
      <ul class="menu-list">
        <li class="menu-item">ホーム</li>
        <li class="menu-item">サービス</li>
        <li class="menu-item" style="margin-bottom: 11px;">製品</li>
        <li class="menu-item">会社情報</li>
        <li class="menu-item">お問い合わせ</li>
      </ul>
    `,
    modifiedCSS: `
      .menu-list {
        list-style: none;
        padding: 30px;
        margin: 0;
        background: #ffffff;
      }
      .menu-item {
        padding: 15px 20px;
        margin-bottom: 10px;
        background: #f8f9fa;
        color: #333333;
        border: 1px solid #e9ecef;
        cursor: pointer;
        transition: background 0.3s;
      }
      .menu-item:hover {
        background: #e9ecef;
      }
      .menu-item:last-child {
        margin-bottom: 0;
      }
    `,
    answerArea: {
      x: 30,
      y: 165,
      width: 740,
      height: 50
    }
  },

  // テキスト系
  {
    id: 'text-1',
    category: 'text',
    title: 'フォントサイズの違い',
    description: '1つの段落のフォントサイズが1px違います',
    baseHTML: `
      <article class="article">
        <h2 class="title">最新のニュース</h2>
        <p class="paragraph">昨日、新しい技術発表がありました。この技術は多くの分野で活用されることが期待されています。</p>
        <p class="paragraph">専門家によると、この技術により作業効率が大幅に向上する可能性があるとのことです。</p>
        <p class="paragraph">今後の展開が非常に楽しみです。詳細については追って報告いたします。</p>
      </article>
    `,
    baseCSS: `
      .article {
        padding: 40px;
        background: #ffffff;
        max-width: 600px;
        margin: 0 auto;
      }
      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #333333;
      }
      .paragraph {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 15px;
        color: #555555;
      }
    `,
    modifiedHTML: `
      <article class="article">
        <h2 class="title">最新のニュース</h2>
        <p class="paragraph">昨日、新しい技術発表がありました。この技術は多くの分野で活用されることが期待されています。</p>
        <p class="paragraph" style="font-size: 17px;">専門家によると、この技術により作業効率が大幅に向上する可能性があるとのことです。</p>
        <p class="paragraph">今後の展開が非常に楽しみです。詳細については追って報告いたします。</p>
      </article>
    `,
    modifiedCSS: `
      .article {
        padding: 40px;
        background: #ffffff;
        max-width: 600px;
        margin: 0 auto;
      }
      .title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #333333;
      }
      .paragraph {
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 15px;
        color: #555555;
      }
    `,
    answerArea: {
      x: 40,
      y: 110,
      width: 720,
      height: 40
    }
  },

  // ボタン系
  {
    id: 'button-1',
    category: 'button-interactive',
    title: 'ボタンの高さの違い',
    description: '1つのボタンの高さが1px違います',
    baseHTML: `
      <div class="button-group">
        <button class="btn btn-primary">保存</button>
        <button class="btn btn-secondary">キャンセル</button>
        <button class="btn btn-danger">削除</button>
      </div>
    `,
    baseCSS: `
      .button-group {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .btn {
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
      }
      .btn-primary {
        background: #007bff;
        color: white;
      }
      .btn-secondary {
        background: #6c757d;
        color: white;
      }
      .btn-danger {
        background: #dc3545;
        color: white;
      }
    `,
    modifiedHTML: `
      <div class="button-group">
        <button class="btn btn-primary">保存</button>
        <button class="btn btn-secondary" style="padding-top: 13px; padding-bottom: 13px;">キャンセル</button>
        <button class="btn btn-danger">削除</button>
      </div>
    `,
    modifiedCSS: `
      .button-group {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .btn {
        padding: 12px 24px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
      }
      .btn-primary {
        background: #007bff;
        color: white;
      }
      .btn-secondary {
        background: #6c757d;
        color: white;
      }
      .btn-danger {
        background: #dc3545;
        color: white;
      }
    `,
    answerArea: {
      x: 250,
      y: 40,
      width: 120,
      height: 48
    }
  },

  // アイコン系
  {
    id: 'icon-1',
    category: 'icon',
    title: 'アイコンの位置ずれ',
    description: '1つのアイコンが1px右にずれています',
    baseHTML: `
      <div class="icon-list">
        <div class="icon-item">
          <div class="icon">📧</div>
          <span>メール</span>
        </div>
        <div class="icon-item">
          <div class="icon">📱</div>
          <span>電話</span>
        </div>
        <div class="icon-item">
          <div class="icon">📍</div>
          <span>位置</span>
        </div>
      </div>
    `,
    baseCSS: `
      .icon-list {
        display: flex;
        gap: 40px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .icon {
        font-size: 48px;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8f9fa;
        border-radius: 12px;
        border: 1px solid #e9ecef;
      }
      .icon-item span {
        font-size: 14px;
        color: #666666;
      }
    `,
    modifiedHTML: `
      <div class="icon-list">
        <div class="icon-item">
          <div class="icon">📧</div>
          <span>メール</span>
        </div>
        <div class="icon-item">
          <div class="icon" style="position: relative; left: 1px;">📱</div>
          <span>電話</span>
        </div>
        <div class="icon-item">
          <div class="icon">📍</div>
          <span>位置</span>
        </div>
      </div>
    `,
    modifiedCSS: `
      .icon-list {
        display: flex;
        gap: 40px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .icon {
        font-size: 48px;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8f9fa;
        border-radius: 12px;
        border: 1px solid #e9ecef;
      }
      .icon-item span {
        font-size: 14px;
        color: #666666;
      }
    `,
    answerArea: {
      x: 310,
      y: 40,
      width: 80,
      height: 80
    }
  },

  // パディング系
  {
    id: 'padding-1',
    category: 'padding',
    title: 'カードのパディング',
    description: '1つのカードの左パディングが1px違います',
    baseHTML: `
      <div class="card-wrapper">
        <div class="info-card">
          <h3>基本プラン</h3>
          <p>個人利用に最適なプランです</p>
        </div>
        <div class="info-card">
          <h3>プロプラン</h3>
          <p>ビジネス利用に最適なプランです</p>
        </div>
      </div>
    `,
    baseCSS: `
      .card-wrapper {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .info-card {
        width: 250px;
        padding: 30px;
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
      }
      .info-card h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #333333;
      }
      .info-card p {
        font-size: 14px;
        color: #666666;
        line-height: 1.5;
      }
    `,
    modifiedHTML: `
      <div class="card-wrapper">
        <div class="info-card" style="padding-left: 31px;">
          <h3>基本プラン</h3>
          <p>個人利用に最適なプランです</p>
        </div>
        <div class="info-card">
          <h3>プロプラン</h3>
          <p>ビジネス利用に最適なプランです</p>
        </div>
      </div>
    `,
    modifiedCSS: `
      .card-wrapper {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .info-card {
        width: 250px;
        padding: 30px;
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
      }
      .info-card h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #333333;
      }
      .info-card p {
        font-size: 14px;
        color: #666666;
        line-height: 1.5;
      }
    `,
    answerArea: {
      x: 145,
      y: 40,
      width: 250,
      height: 120
    }
  },

  // 背景系
  {
    id: 'background-1',
    category: 'background',
    title: '背景グラデーションの角度',
    description: '1つのセクションの背景グラデーション角度が1度違います',
    baseHTML: `
      <div class="sections">
        <div class="section section-1">Section 1</div>
        <div class="section section-2">Section 2</div>
        <div class="section section-3">Section 3</div>
      </div>
    `,
    baseCSS: `
      .sections {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
      }
      .section {
        width: 200px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 18px;
      }
      .section-1 {
        background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
      }
      .section-2 {
        background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
      }
      .section-3 {
        background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
      }
    `,
    modifiedHTML: `
      <div class="sections">
        <div class="section section-1">Section 1</div>
        <div class="section section-2" style="background: linear-gradient(46deg, #f093fb 0%, #f5576c 100%);">Section 2</div>
        <div class="section section-3">Section 3</div>
      </div>
    `,
    modifiedCSS: `
      .sections {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
      }
      .section {
        width: 200px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 18px;
      }
      .section-1 {
        background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
      }
      .section-2 {
        background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
      }
      .section-3 {
        background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
      }
    `,
    answerArea: {
      x: 260,
      y: 40,
      width: 200,
      height: 150
    }
  },

  // シャドウ系
  {
    id: 'shadow-1',
    category: 'shadow-effect',
    title: 'ボックスシャドウのぼかし',
    description: '1つの要素のシャドウのぼかしが1px違います',
    baseHTML: `
      <div class="shadow-boxes">
        <div class="shadow-box">Box 1</div>
        <div class="shadow-box">Box 2</div>
        <div class="shadow-box">Box 3</div>
      </div>
    `,
    baseCSS: `
      .shadow-boxes {
        display: flex;
        gap: 40px;
        padding: 60px;
        background: #ffffff;
        justify-content: center;
      }
      .shadow-box {
        width: 150px;
        height: 150px;
        background: white;
        border: 1px solid #e9ecef;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #333333;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    `,
    modifiedHTML: `
      <div class="shadow-boxes">
        <div class="shadow-box">Box 1</div>
        <div class="shadow-box">Box 2</div>
        <div class="shadow-box" style="box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);">Box 3</div>
      </div>
    `,
    modifiedCSS: `
      .shadow-boxes {
        display: flex;
        gap: 40px;
        padding: 60px;
        background: #ffffff;
        justify-content: center;
      }
      .shadow-box {
        width: 150px;
        height: 150px;
        background: white;
        border: 1px solid #e9ecef;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #333333;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    `,
    answerArea: {
      x: 450,
      y: 60,
      width: 150,
      height: 150
    }
  },

  // レスポンシブ系
  {
    id: 'responsive-1',
    category: 'responsive',
    title: 'フレックスアイテムの幅',
    description: '1つのフレックスアイテムの幅が1px違います',
    baseHTML: `
      <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
      </div>
    `,
    baseCSS: `
      .flex-container {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
      }
      .flex-item {
        flex: 1;
        min-width: 200px;
        height: 100px;
        background: #e3f2fd;
        border: 1px solid #90caf9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #1976d2;
      }
    `,
    modifiedHTML: `
      <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item" style="min-width: 201px;">Item 2</div>
        <div class="flex-item">Item 3</div>
      </div>
    `,
    modifiedCSS: `
      .flex-container {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
      }
      .flex-item {
        flex: 1;
        min-width: 200px;
        height: 100px;
        background: #e3f2fd;
        border: 1px solid #90caf9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #1976d2;
      }
    `,
    answerArea: {
      x: 260,
      y: 40,
      width: 200,
      height: 100
    }
  },

  // アニメーション系
  {
    id: 'animation-1',
    category: 'animation',
    title: 'トランジションの時間',
    description: '1つの要素のトランジション時間が0.01秒違います',
    baseHTML: `
      <div class="hover-boxes">
        <div class="hover-box">Hover 1</div>
        <div class="hover-box">Hover 2</div>
        <div class="hover-box">Hover 3</div>
      </div>
    `,
    baseCSS: `
      .hover-boxes {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .hover-box {
        width: 180px;
        height: 120px;
        background: #f8f9fa;
        border: 2px solid #dee2e6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #495057;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      .hover-box:hover {
        background: #e9ecef;
        transform: translateY(-2px);
      }
    `,
    modifiedHTML: `
      <div class="hover-boxes">
        <div class="hover-box">Hover 1</div>
        <div class="hover-box" style="transition: all 0.31s ease;">Hover 2</div>
        <div class="hover-box">Hover 3</div>
      </div>
    `,
    modifiedCSS: `
      .hover-boxes {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .hover-box {
        width: 180px;
        height: 120px;
        background: #f8f9fa;
        border: 2px solid #dee2e6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #495057;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      .hover-box:hover {
        background: #e9ecef;
        transform: translateY(-2px);
      }
    `,
    answerArea: {
      x: 285,
      y: 40,
      width: 180,
      height: 120
    }
  },

  // アイコン・画像系
  {
    id: 'icon-image-1',
    category: 'icon-image',
    title: '画像のサイズ',
    description: '1つの画像の幅が1px違います',
    baseHTML: `
      <div class="image-gallery">
        <div class="image-item">
          <div class="image-placeholder">IMG 1</div>
        </div>
        <div class="image-item">
          <div class="image-placeholder">IMG 2</div>
        </div>
        <div class="image-item">
          <div class="image-placeholder">IMG 3</div>
        </div>
      </div>
    `,
    baseCSS: `
      .image-gallery {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .image-item {
        border: 1px solid #dee2e6;
        padding: 10px;
        background: #f8f9fa;
      }
      .image-placeholder {
        width: 120px;
        height: 120px;
        background: #e9ecef;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #6c757d;
      }
    `,
    modifiedHTML: `
      <div class="image-gallery">
        <div class="image-item">
          <div class="image-placeholder" style="width: 121px;">IMG 1</div>
        </div>
        <div class="image-item">
          <div class="image-placeholder">IMG 2</div>
        </div>
        <div class="image-item">
          <div class="image-placeholder">IMG 3</div>
        </div>
      </div>
    `,
    modifiedCSS: `
      .image-gallery {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .image-item {
        border: 1px solid #dee2e6;
        padding: 10px;
        background: #f8f9fa;
      }
      .image-placeholder {
        width: 120px;
        height: 120px;
        background: #e9ecef;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #6c757d;
      }
    `,
    answerArea: {
      x: 150,
      y: 40,
      width: 142,
      height: 142
    }
  },

  // ボタン・インタラクティブ系
  {
    id: 'button-interactive-1',
    category: 'button-interactive',
    title: 'フォーム要素の高さ',
    description: '1つの入力フィールドの高さが1px違います',
    baseHTML: `
      <form class="contact-form">
        <input type="text" class="form-input" placeholder="名前">
        <input type="email" class="form-input" placeholder="メールアドレス">
        <input type="tel" class="form-input" placeholder="電話番号">
      </form>
    `,
    baseCSS: `
      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 40px;
        background: #ffffff;
        max-width: 400px;
        margin: 0 auto;
      }
      .form-input {
        padding: 12px 16px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        font-size: 16px;
        color: #495057;
        background: #ffffff;
      }
      .form-input::placeholder {
        color: #6c757d;
      }
      .form-input:focus {
        outline: none;
        border-color: #80bdff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
      }
    `,
    modifiedHTML: `
      <form class="contact-form">
        <input type="text" class="form-input" placeholder="名前">
        <input type="email" class="form-input" style="padding-top: 13px; padding-bottom: 13px;" placeholder="メールアドレス">
        <input type="tel" class="form-input" placeholder="電話番号">
      </form>
    `,
    modifiedCSS: `
      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 40px;
        background: #ffffff;
        max-width: 400px;
        margin: 0 auto;
      }
      .form-input {
        padding: 12px 16px;
        border: 1px solid #ced4da;
        border-radius: 4px;
        font-size: 16px;
        color: #495057;
        background: #ffffff;
      }
      .form-input::placeholder {
        color: #6c757d;
      }
      .form-input:focus {
        outline: none;
        border-color: #80bdff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
      }
    `,
    answerArea: {
      x: 40,
      y: 95,
      width: 400,
      height: 45
    }
  }
]