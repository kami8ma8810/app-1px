import type { Problem } from '../types'

export const problems: Problem[] = [
  // グリッドレイアウト系
  {
    id: 'grid-1',
    category: 'grid-layout',
    title: 'グリッドアイテムのズレ',
    hint: 'グリッドアイテムのひとつが1pxずれています',
    description: '3番目のグリッドアイテムが1px下にずれています',
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
      x: 220,
      y: 40,
      width: 100,
      height: 100
    }
  },

  {
    id: 'grid-2',
    category: 'grid-layout',
    title: 'グリッドギャップの違い',
    hint: 'グリッドの間隔が1px違います',
    description: '横方向のグリッドギャップが20pxではなく21pxになっています',
    baseHTML: `
      <div class="grid-wrapper">
        <div class="grid-box">A</div>
        <div class="grid-box">B</div>
        <div class="grid-box">C</div>
        <div class="grid-box">D</div>
      </div>
    `,
    baseCSS: `
      .grid-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 120px);
        gap: 20px;
        padding: 40px;
        background: #f5f5f5;
      }
      .grid-box {
        height: 120px;
        background: #2ecc71;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        border-radius: 4px;
      }
    `,
    modifiedHTML: `
      <div class="grid-wrapper" style="column-gap: 21px;">
        <div class="grid-box">A</div>
        <div class="grid-box">B</div>
        <div class="grid-box">C</div>
        <div class="grid-box">D</div>
      </div>
    `,
    modifiedCSS: `
      .grid-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 120px);
        gap: 20px;
        padding: 40px;
        background: #f5f5f5;
      }
      .grid-box {
        height: 120px;
        background: #2ecc71;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        border-radius: 4px;
      }
    `,
    answerArea: {
      x: 160,
      y: 40,
      width: 21,
      height: 260
    }
  },
  
  // ボーダー・境界線系
  {
    id: 'border-1',
    category: 'border',
    title: 'ボーダーラジウスの違い',
    hint: 'カードのひとつのborder-radiusが1px違います',
    description: 'Card 2のborder-radiusが10pxではなく11pxになっています',
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
    hint: 'リスト項目のひとつの間隔が1px違います',
    description: '「製品」と「会社情報」の間の間隔が10pxではなく11pxになっています',
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
    hint: '段落のひとつのフォントサイズが1px違います',
    description: '2番目の段落（「専門家によると〜」）のフォントサイズが16pxではなく17pxになっています',
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
    hint: 'ボタンのひとつの高さが1px違います',
    description: '「キャンセル」ボタンの上下パディングが12pxではなく13pxになっています',
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
    category: 'icon-image',
    title: 'アイコンの位置ずれ',
    hint: 'アイコンのひとつが1pxずれています',
    description: '「電話」アイコンが1px右にずれています',
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
    category: 'spacing',
    title: 'カードのパディング',
    hint: 'カードのひとつのパディングが1px違います',
    description: '「基本プラン」カードの左パディングが30pxではなく31pxになっています',
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
    title: '背景パターンの位置',
    hint: 'ストライプパターンのひとつが1pxずれています',
    description: '真ん中のストライプパターンが1px左にずれています',
    baseHTML: `
      <div class="pattern-container">
        <div class="pattern-box pattern-1">
          <div class="stripes"></div>
        </div>
        <div class="pattern-box pattern-2">
          <div class="stripes"></div>
        </div>
        <div class="pattern-box pattern-3">
          <div class="stripes"></div>
        </div>
      </div>
    `,
    baseCSS: `
      .pattern-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
        justify-content: center;
      }
      .pattern-box {
        width: 180px;
        height: 180px;
        background: white;
        border: 1px solid #ddd;
        overflow: hidden;
        position: relative;
      }
      .stripes {
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient(
          45deg,
          #e3f2fd,
          #e3f2fd 10px,
          #ffffff 10px,
          #ffffff 20px
        );
      }
    `,
    modifiedHTML: `
      <div class="pattern-container">
        <div class="pattern-box pattern-1">
          <div class="stripes"></div>
        </div>
        <div class="pattern-box pattern-2">
          <div class="stripes" style="position: relative; left: -1px;"></div>
        </div>
        <div class="pattern-box pattern-3">
          <div class="stripes"></div>
        </div>
      </div>
    `,
    modifiedCSS: `
      .pattern-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
        justify-content: center;
      }
      .pattern-box {
        width: 180px;
        height: 180px;
        background: white;
        border: 1px solid #ddd;
        overflow: hidden;
        position: relative;
      }
      .stripes {
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient(
          45deg,
          #e3f2fd,
          #e3f2fd 10px,
          #ffffff 10px,
          #ffffff 20px
        );
      }
    `,
    answerArea: {
      x: 285,
      y: 40,
      width: 180,
      height: 180
    }
  },

  // シャドウ系
  {
    id: 'shadow-1',
    category: 'shadow-effect',
    title: 'ボックスシャドウのぼかし',
    hint: 'ボックスのひとつのシャドウが1px違います',
    description: 'Box 3のシャドウのぼかしが6pxではなく7pxになっています',
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
      x: 490,
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
    hint: 'フレックスアイテムのひとつの幅が1px違います',
    description: 'Item 2の最小幅が200pxではなく201pxになっています',
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
    title: 'アニメーション要素の位置',
    hint: 'ローディングアイコンのひとつが1pxずれています',
    description: '回転するローディングアイコンが1px下にずれています',
    baseHTML: `
      <div class="loading-container">
        <div class="loading-item">
          <div class="spinner"></div>
          <span>Loading 1</span>
        </div>
        <div class="loading-item">
          <div class="spinner"></div>
          <span>Loading 2</span>
        </div>
        <div class="loading-item">
          <div class="spinner"></div>
          <span>Loading 3</span>
        </div>
      </div>
    `,
    baseCSS: `
      .loading-container {
        display: flex;
        gap: 40px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .loading-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }
      .spinner {
        width: 40px;
        height: 40px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #3498db;
        border-radius: 50%;
        animation: spin 2s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .loading-item span {
        font-size: 14px;
        color: #666;
      }
    `,
    modifiedHTML: `
      <div class="loading-container">
        <div class="loading-item">
          <div class="spinner"></div>
          <span>Loading 1</span>
        </div>
        <div class="loading-item">
          <div class="spinner" style="position: relative; top: 1px;"></div>
          <span>Loading 2</span>
        </div>
        <div class="loading-item">
          <div class="spinner"></div>
          <span>Loading 3</span>
        </div>
      </div>
    `,
    modifiedCSS: `
      .loading-container {
        display: flex;
        gap: 40px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .loading-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }
      .spinner {
        width: 40px;
        height: 40px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #3498db;
        border-radius: 50%;
        animation: spin 2s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .loading-item span {
        font-size: 14px;
        color: #666;
      }
    `,
    answerArea: {
      x: 330,
      y: 40,
      width: 100,
      height: 100
    }
  },

  // アイコン・画像系
  {
    id: 'icon-image-1',
    category: 'icon-image',
    title: '画像のサイズ',
    hint: '画像のひとつの幅が1px違います',
    description: 'IMG 1の幅が120pxではなく121pxになっています',
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
    hint: '入力フィールドのひとつの高さが1px違います',
    description: '「メールアドレス」フィールドの上下パディングが12pxではなく13pxになっています',
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
  },

  // グリッドレイアウト系（追加）
  {
    id: 'grid-3',
    category: 'grid-layout',
    title: 'グリッドカラムの幅',
    hint: 'グリッドカラムのひとつの幅が1px違います',
    description: '2番目のカラムの幅が150pxではなく151pxになっています',
    baseHTML: `
      <div class="column-grid">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
      </div>
    `,
    baseCSS: `
      .column-grid {
        display: grid;
        grid-template-columns: 150px 150px 150px;
        gap: 15px;
        padding: 40px;
        background: #ffffff;
      }
      .column {
        height: 200px;
        background: #9b59b6;
        color: white;
        padding: 20px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
    modifiedHTML: `
      <div class="column-grid" style="grid-template-columns: 150px 151px 150px;">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
      </div>
    `,
    modifiedCSS: `
      .column-grid {
        display: grid;
        grid-template-columns: 150px 150px 150px;
        gap: 15px;
        padding: 40px;
        background: #ffffff;
      }
      .column {
        height: 200px;
        background: #9b59b6;
        color: white;
        padding: 20px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
    answerArea: {
      x: 205,
      y: 40,
      width: 151,
      height: 200
    }
  },

  // ボーダー・境界線系（追加）
  {
    id: 'border-2',
    category: 'border',
    title: 'ボーダーの太さ',
    hint: '要素のひとつのボーダーが1px違います',
    description: '真ん中のボックスのボーダーが2pxではなく3pxになっています',
    baseHTML: `
      <div class="border-container">
        <div class="border-box">Box A</div>
        <div class="border-box">Box B</div>
        <div class="border-box">Box C</div>
      </div>
    `,
    baseCSS: `
      .border-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f8f9fa;
        justify-content: center;
      }
      .border-box {
        width: 150px;
        height: 150px;
        background: white;
        border: 2px solid #e74c3c;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #333;
      }
    `,
    modifiedHTML: `
      <div class="border-container">
        <div class="border-box">Box A</div>
        <div class="border-box" style="border-width: 3px;">Box B</div>
        <div class="border-box">Box C</div>
      </div>
    `,
    modifiedCSS: `
      .border-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f8f9fa;
        justify-content: center;
      }
      .border-box {
        width: 150px;
        height: 150px;
        background: white;
        border: 2px solid #e74c3c;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #333;
      }
    `,
    answerArea: {
      x: 260,
      y: 40,
      width: 156,
      height: 156
    }
  },

  // テキスト系（追加）
  {
    id: 'text-2',
    category: 'text',
    title: '行間の違い',
    hint: 'テキストの行間が1px違います',
    description: 'パラグラフの行間が25pxではなく26pxになっています',
    baseHTML: `
      <div class="text-container">
        <p class="line-text">これは最初の行です。テキストの行間を確認するための文章です。</p>
        <p class="line-text">これは2番目の行です。行間の違いを見つけてください。</p>
        <p class="line-text">これは3番目の行です。1pxの違いを探してみましょう。</p>
      </div>
    `,
    baseCSS: `
      .text-container {
        padding: 40px;
        background: #ffffff;
        max-width: 600px;
        margin: 0 auto;
      }
      .line-text {
        font-size: 16px;
        line-height: 25px;
        color: #333;
        margin: 0;
      }
    `,
    modifiedHTML: `
      <div class="text-container">
        <p class="line-text">これは最初の行です。テキストの行間を確認するための文章です。</p>
        <p class="line-text" style="line-height: 26px;">これは2番目の行です。行間の違いを見つけてください。</p>
        <p class="line-text">これは3番目の行です。1pxの違いを探してみましょう。</p>
      </div>
    `,
    modifiedCSS: `
      .text-container {
        padding: 40px;
        background: #ffffff;
        max-width: 600px;
        margin: 0 auto;
      }
      .line-text {
        font-size: 16px;
        line-height: 25px;
        color: #333;
        margin: 0;
      }
    `,
    answerArea: {
      x: 40,
      y: 65,
      width: 720,
      height: 26
    }
  },

  // 間隔・マージン系（追加）
  {
    id: 'spacing-2',
    category: 'spacing',
    title: 'ナビゲーションの間隔',
    hint: 'ナビゲーション項目の間隔が1px違います',
    description: '「サービス」と「製品」の間の間隔が15pxではなく16pxになっています',
    baseHTML: `
      <nav class="nav-bar">
        <a href="#" class="nav-item">ホーム</a>
        <a href="#" class="nav-item">サービス</a>
        <a href="#" class="nav-item">製品</a>
        <a href="#" class="nav-item">お問い合わせ</a>
      </nav>
    `,
    baseCSS: `
      .nav-bar {
        display: flex;
        gap: 15px;
        padding: 20px 40px;
        background: #f8f9fa;
        border-bottom: 1px solid #e9ecef;
      }
      .nav-item {
        color: #495057;
        text-decoration: none;
        padding: 10px 20px;
        background: white;
        border: 1px solid #dee2e6;
        border-radius: 6px;
        font-weight: 500;
        transition: all 0.2s;
        box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      }
      .nav-item:hover {
        background: #f8f9fa;
        border-color: #adb5bd;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0,0,0,0.12);
      }
    `,
    modifiedHTML: `
      <nav class="nav-bar">
        <a href="#" class="nav-item">ホーム</a>
        <a href="#" class="nav-item" style="margin-right: 16px;">サービス</a>
        <a href="#" class="nav-item">製品</a>
        <a href="#" class="nav-item">お問い合わせ</a>
      </nav>
    `,
    modifiedCSS: `
      .nav-bar {
        display: flex;
        gap: 15px;
        padding: 20px 40px;
        background: #f8f9fa;
        border-bottom: 1px solid #e9ecef;
      }
      .nav-item {
        color: #495057;
        text-decoration: none;
        padding: 10px 20px;
        background: white;
        border: 1px solid #dee2e6;
        border-radius: 6px;
        font-weight: 500;
        transition: all 0.2s;
        box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      }
      .nav-item:hover {
        background: #f8f9fa;
        border-color: #adb5bd;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0,0,0,0.12);
      }
    `,
    answerArea: {
      x: 220,
      y: 20,
      width: 16,
      height: 44
    }
  },

  // アイコン・画像系（追加）
  {
    id: 'icon-2',
    category: 'icon-image',
    title: 'アイコンのサイズ',
    hint: 'アイコンのひとつのサイズが1px違います',
    description: '真ん中のアイコンが32pxではなく33pxになっています',
    baseHTML: `
      <div class="icon-row">
        <span class="icon-size">🏠</span>
        <span class="icon-size">📧</span>
        <span class="icon-size">⚙️</span>
      </div>
    `,
    baseCSS: `
      .icon-row {
        display: flex;
        gap: 40px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
        align-items: center;
      }
      .icon-size {
        font-size: 32px;
        display: inline-block;
        padding: 20px;
        background: #f0f0f0;
        border-radius: 8px;
      }
    `,
    modifiedHTML: `
      <div class="icon-row">
        <span class="icon-size">🏠</span>
        <span class="icon-size" style="font-size: 33px;">📧</span>
        <span class="icon-size">⚙️</span>
      </div>
    `,
    modifiedCSS: `
      .icon-row {
        display: flex;
        gap: 40px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
        align-items: center;
      }
      .icon-size {
        font-size: 32px;
        display: inline-block;
        padding: 20px;
        background: #f0f0f0;
        border-radius: 8px;
      }
    `,
    answerArea: {
      x: 296,
      y: 40,
      width: 73,
      height: 72
    }
  },

  // ボタン・インタラクティブ系（追加）
  {
    id: 'button-2',
    category: 'button-interactive',
    title: 'ボタンの幅',
    hint: 'ボタンのひとつの幅が1px違います',
    description: '「送信」ボタンの幅が100pxではなく101pxになっています',
    baseHTML: `
      <div class="button-row">
        <button class="fixed-btn">キャンセル</button>
        <button class="fixed-btn">送信</button>
        <button class="fixed-btn">リセット</button>
      </div>
    `,
    baseCSS: `
      .button-row {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .fixed-btn {
        width: 100px;
        height: 40px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.3s;
      }
      .fixed-btn:hover {
        background: #2980b9;
      }
    `,
    modifiedHTML: `
      <div class="button-row">
        <button class="fixed-btn">キャンセル</button>
        <button class="fixed-btn" style="width: 101px;">送信</button>
        <button class="fixed-btn">リセット</button>
      </div>
    `,
    modifiedCSS: `
      .button-row {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #ffffff;
        justify-content: center;
      }
      .fixed-btn {
        width: 100px;
        height: 40px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.3s;
      }
      .fixed-btn:hover {
        background: #2980b9;
      }
    `,
    answerArea: {
      x: 260,
      y: 40,
      width: 101,
      height: 40
    }
  },

  // シャドウ系（追加）
  {
    id: 'shadow-2',
    category: 'shadow-effect',
    title: 'シャドウのオフセット',
    hint: 'シャドウのひとつのオフセットが1px違います',
    description: '左のカードのシャドウの縦オフセットが2pxではなく3pxになっています',
    baseHTML: `
      <div class="shadow-cards">
        <div class="shadow-card">カード1</div>
        <div class="shadow-card">カード2</div>
      </div>
    `,
    baseCSS: `
      .shadow-cards {
        display: flex;
        gap: 40px;
        padding: 60px;
        background: #f5f5f5;
        justify-content: center;
      }
      .shadow-card {
        width: 200px;
        height: 120px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #333;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
    `,
    modifiedHTML: `
      <div class="shadow-cards">
        <div class="shadow-card" style="box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);">カード1</div>
        <div class="shadow-card">カード2</div>
      </div>
    `,
    modifiedCSS: `
      .shadow-cards {
        display: flex;
        gap: 40px;
        padding: 60px;
        background: #f5f5f5;
        justify-content: center;
      }
      .shadow-card {
        width: 200px;
        height: 120px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #333;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
    `,
    answerArea: {
      x: 150,
      y: 60,
      width: 200,
      height: 120
    }
  },

  // 背景系（追加）
  {
    id: 'background-2',
    category: 'background',
    title: '背景の位置',
    hint: '背景画像の位置が1px違います',
    description: '背景パターンが1px上にずれています',
    baseHTML: `
      <div class="bg-container">
        <div class="bg-box">
          <h3>背景パターン</h3>
          <p>背景の位置を確認</p>
        </div>
      </div>
    `,
    baseCSS: `
      .bg-container {
        padding: 40px;
        background: #f0f0f0;
      }
      .bg-box {
        width: 300px;
        height: 200px;
        margin: 0 auto;
        padding: 40px;
        background-color: white;
        background-image: repeating-linear-gradient(
          0deg,
          #e0e0e0,
          #e0e0e0 1px,
          transparent 1px,
          transparent 20px
        );
        background-position: 0 0;
        border: 1px solid #ddd;
      }
      .bg-box h3 {
        margin: 0 0 10px 0;
        color: #333;
      }
      .bg-box p {
        margin: 0;
        color: #666;
      }
    `,
    modifiedHTML: `
      <div class="bg-container">
        <div class="bg-box" style="background-position: 0 -1px;">
          <h3>背景パターン</h3>
          <p>背景の位置を確認</p>
        </div>
      </div>
    `,
    modifiedCSS: `
      .bg-container {
        padding: 40px;
        background: #f0f0f0;
      }
      .bg-box {
        width: 300px;
        height: 200px;
        margin: 0 auto;
        padding: 40px;
        background-color: white;
        background-image: repeating-linear-gradient(
          0deg,
          #e0e0e0,
          #e0e0e0 1px,
          transparent 1px,
          transparent 20px
        );
        background-position: 0 0;
        border: 1px solid #ddd;
      }
      .bg-box h3 {
        margin: 0 0 10px 0;
        color: #333;
      }
      .bg-box p {
        margin: 0;
        color: #666;
      }
    `,
    answerArea: {
      x: 230,
      y: 40,
      width: 300,
      height: 200
    }
  },

  // グリッドレイアウト系 - 追加問題
  {
    id: 'grid-3',
    category: 'grid-layout',
    title: 'グリッドギャップの違い（行間）',
    hint: 'グリッドの行間が1px違います',
    description: 'グリッドの行間（row-gap）が20pxではなく21pxになっています',
    baseHTML: `
      <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
      </div>
    `,
    modifiedHTML: `
      <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
      </div>
    `,
    baseCSS: `
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 40px;
        background: #f8f9fa;
      }
      .grid-item {
        background: #e3f2fd;
        border: 2px solid #2196f3;
        padding: 30px;
        text-align: center;
        font-weight: 600;
        color: #1976d2;
        border-radius: 8px;
      }
    `,
    modifiedCSS: `
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 21px;
        column-gap: 20px;
        padding: 40px;
        background: #f8f9fa;
      }
      .grid-item {
        background: #e3f2fd;
        border: 2px solid #2196f3;
        padding: 30px;
        text-align: center;
        font-weight: 600;
        color: #1976d2;
        border-radius: 8px;
      }
    `,
    answerArea: {
      x: 40,
      y: 110,
      width: 720,
      height: 20
    }
  },

  {
    id: 'grid-4',
    category: 'grid-layout',
    title: 'グリッドアイテムの幅',
    hint: 'グリッドアイテムのひとつの幅が1px違います',
    description: '中央のグリッドアイテムの幅が1px広くなっています',
    baseHTML: `
      <div class="grid-container">
        <div class="grid-item">左</div>
        <div class="grid-item">中央</div>
        <div class="grid-item">右</div>
      </div>
    `,
    modifiedHTML: `
      <div class="grid-container">
        <div class="grid-item">左</div>
        <div class="grid-item">中央</div>
        <div class="grid-item">右</div>
      </div>
    `,
    baseCSS: `
      .grid-container {
        display: grid;
        grid-template-columns: 200px 200px 200px;
        gap: 30px;
        padding: 40px;
        background: #fafafa;
        justify-content: center;
      }
      .grid-item {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 40px;
        text-align: center;
        color: white;
        font-size: 18px;
        font-weight: bold;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
    `,
    modifiedCSS: `
      .grid-container {
        display: grid;
        grid-template-columns: 200px 201px 200px;
        gap: 30px;
        padding: 40px;
        background: #fafafa;
        justify-content: center;
      }
      .grid-item {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 40px;
        text-align: center;
        color: white;
        font-size: 18px;
        font-weight: bold;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
    `,
    answerArea: {
      x: 270,
      y: 40,
      width: 201,
      height: 138
    }
  },

  // ボーダー系 - 追加問題
  {
    id: 'border-3',
    category: 'border',
    title: 'ボーダー半径の違い',
    hint: 'カードのひとつの角丸が1px違います',
    description: '中央のカードの角丸（border-radius）が12pxではなく13pxになっています',
    baseHTML: `
      <div class="cards-container">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
      </div>
    `,
    modifiedHTML: `
      <div class="cards-container">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
      </div>
    `,
    baseCSS: `
      .cards-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
        justify-content: center;
      }
      .card {
        width: 180px;
        height: 120px;
        background: white;
        border: 2px solid #ddd;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: #333;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    `,
    modifiedCSS: `
      .cards-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
        justify-content: center;
      }
      .card {
        width: 180px;
        height: 120px;
        background: white;
        border: 2px solid #ddd;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: #333;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .card:nth-child(2) {
        border-radius: 13px;
      }
    `,
    answerArea: {
      x: 240,
      y: 40,
      width: 184,
      height: 124
    }
  },

  {
    id: 'border-4',
    category: 'border',
    title: 'アウトラインの太さ',
    hint: 'フォーカス時のアウトラインが1px違います',
    description: 'フォーカス時のアウトラインが2pxではなく3pxになっています',
    baseHTML: `
      <div class="form-container">
        <input type="text" class="input-field" placeholder="名前" autofocus>
        <input type="email" class="input-field" placeholder="メールアドレス">
        <input type="tel" class="input-field" placeholder="電話番号">
      </div>
    `,
    modifiedHTML: `
      <div class="form-container">
        <input type="text" class="input-field" placeholder="名前" autofocus>
        <input type="email" class="input-field" placeholder="メールアドレス">
        <input type="tel" class="input-field" placeholder="電話番号">
      </div>
    `,
    baseCSS: `
      .form-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 40px;
        background: #fafafa;
        align-items: center;
      }
      .input-field {
        width: 300px;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 16px;
        transition: all 0.2s;
      }
      .input-field:focus {
        outline: 2px solid #2196f3;
        outline-offset: 2px;
        border-color: #2196f3;
      }
    `,
    modifiedCSS: `
      .form-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 40px;
        background: #fafafa;
        align-items: center;
      }
      .input-field {
        width: 300px;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 16px;
        transition: all 0.2s;
      }
      .input-field:focus {
        outline: 3px solid #2196f3;
        outline-offset: 2px;
        border-color: #2196f3;
      }
    `,
    answerArea: {
      x: 250,
      y: 40,
      width: 300,
      height: 45
    }
  },

  // スペーシング系 - 追加問題
  {
    id: 'spacing-3',
    category: 'spacing',
    title: 'セクション間の余白',
    hint: 'セクション間の余白が1px違います',
    description: 'セクション2とセクション3の間の余白が40pxではなく41pxになっています',
    baseHTML: `
      <div class="page-container">
        <section class="section">セクション1</section>
        <section class="section">セクション2</section>
        <section class="section">セクション3</section>
      </div>
    `,
    modifiedHTML: `
      <div class="page-container">
        <section class="section">セクション1</section>
        <section class="section">セクション2</section>
        <section class="section">セクション3</section>
      </div>
    `,
    baseCSS: `
      .page-container {
        padding: 20px;
        background: #f8f9fa;
      }
      .section {
        background: white;
        padding: 30px;
        margin-bottom: 40px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        color: #333;
      }
      .section:last-child {
        margin-bottom: 0;
      }
    `,
    modifiedCSS: `
      .page-container {
        padding: 20px;
        background: #f8f9fa;
      }
      .section {
        background: white;
        padding: 30px;
        margin-bottom: 40px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        color: #333;
      }
      .section:nth-child(2) {
        margin-bottom: 41px;
      }
      .section:last-child {
        margin-bottom: 0;
      }
    `,
    answerArea: {
      x: 20,
      y: 188,
      width: 760,
      height: 41
    }
  },

  {
    id: 'spacing-4',
    category: 'spacing',
    title: 'リストアイテムの行間',
    hint: 'リストアイテムの行間が1px違います',
    description: 'リストアイテムの行の高さ（line-height）が24pxではなく25pxになっています',
    baseHTML: `
      <ul class="feature-list">
        <li>高速処理</li>
        <li>簡単操作</li>
        <li>安全性</li>
        <li>拡張性</li>
        <li>サポート</li>
      </ul>
    `,
    modifiedHTML: `
      <ul class="feature-list">
        <li>高速処理</li>
        <li>簡単操作</li>
        <li>安全性</li>
        <li>拡張性</li>
        <li>サポート</li>
      </ul>
    `,
    baseCSS: `
      .feature-list {
        list-style: none;
        padding: 40px;
        background: white;
        margin: 0;
      }
      .feature-list li {
        padding: 8px 0;
        padding-left: 30px;
        position: relative;
        font-size: 16px;
        line-height: 24px;
        color: #333;
      }
      .feature-list li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #4caf50;
        font-weight: bold;
      }
    `,
    modifiedCSS: `
      .feature-list {
        list-style: none;
        padding: 40px;
        background: white;
        margin: 0;
      }
      .feature-list li {
        padding: 8px 0;
        padding-left: 30px;
        position: relative;
        font-size: 16px;
        line-height: 25px;
        color: #333;
      }
      .feature-list li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #4caf50;
        font-weight: bold;
      }
    `,
    answerArea: {
      x: 40,
      y: 40,
      width: 720,
      height: 200
    }
  },

  // テキスト系 - 追加問題
  {
    id: 'text-3',
    category: 'text',
    title: '見出しの文字サイズ',
    hint: '見出しのひとつの文字サイズが1px違います',
    description: 'サブタイトルの文字サイズが18pxではなく19pxになっています',
    baseHTML: `
      <div class="header-section">
        <h1 class="main-title">メインタイトル</h1>
        <h2 class="sub-title">サブタイトル</h2>
        <p class="description">説明文がここに入ります</p>
      </div>
    `,
    modifiedHTML: `
      <div class="header-section">
        <h1 class="main-title">メインタイトル</h1>
        <h2 class="sub-title">サブタイトル</h2>
        <p class="description">説明文がここに入ります</p>
      </div>
    `,
    baseCSS: `
      .header-section {
        text-align: center;
        padding: 60px 40px;
        background: linear-gradient(to bottom, #f8f9fa, #ffffff);
      }
      .main-title {
        font-size: 36px;
        font-weight: 700;
        color: #212529;
        margin: 0 0 16px 0;
      }
      .sub-title {
        font-size: 18px;
        font-weight: 400;
        color: #6c757d;
        margin: 0 0 24px 0;
      }
      .description {
        font-size: 16px;
        line-height: 24px;
        color: #495057;
        margin: 0;
      }
    `,
    modifiedCSS: `
      .header-section {
        text-align: center;
        padding: 60px 40px;
        background: linear-gradient(to bottom, #f8f9fa, #ffffff);
      }
      .main-title {
        font-size: 36px;
        font-weight: 700;
        color: #212529;
        margin: 0 0 16px 0;
      }
      .sub-title {
        font-size: 19px;
        font-weight: 400;
        color: #6c757d;
        margin: 0 0 24px 0;
      }
      .description {
        font-size: 16px;
        line-height: 24px;
        color: #495057;
        margin: 0;
      }
    `,
    answerArea: {
      x: 40,
      y: 112,
      width: 720,
      height: 22
    }
  },

  {
    id: 'text-4',
    category: 'text',
    title: 'フォントウェイトの違い',
    hint: 'テキストのひとつの太さが違います',
    description: '「重要」という文字のフォントウェイトが600ではなく700になっています',
    baseHTML: `
      <div class="text-container">
        <p class="text-item">通常のテキスト</p>
        <p class="text-item important">重要なテキスト</p>
        <p class="text-item">追加のテキスト</p>
      </div>
    `,
    modifiedHTML: `
      <div class="text-container">
        <p class="text-item">通常のテキスト</p>
        <p class="text-item important">重要なテキスト</p>
        <p class="text-item">追加のテキスト</p>
      </div>
    `,
    baseCSS: `
      .text-container {
        padding: 40px;
        background: white;
      }
      .text-item {
        font-size: 18px;
        line-height: 28px;
        color: #333;
        margin: 16px 0;
      }
      .important {
        font-weight: 600;
        color: #d32f2f;
      }
    `,
    modifiedCSS: `
      .text-container {
        padding: 40px;
        background: white;
      }
      .text-item {
        font-size: 18px;
        line-height: 28px;
        color: #333;
        margin: 16px 0;
      }
      .important {
        font-weight: 700;
        color: #d32f2f;
      }
    `,
    answerArea: {
      x: 40,
      y: 84,
      width: 720,
      height: 28
    }
  },

  // アイコン・画像系 - 追加問題
  {
    id: 'icon-image-3',
    category: 'icon-image',
    title: 'アイコンのサイズ',
    hint: 'アイコンのひとつのサイズが1px違います',
    description: 'ダウンロードアイコンが24pxではなく25pxになっています',
    baseHTML: `
      <div class="icon-toolbar">
        <div class="icon-button">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
          <span>メニュー</span>
        </div>
        <div class="icon-button">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          <span>ダウンロード</span>
        </div>
        <div class="icon-button">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>完了</span>
        </div>
      </div>
    `,
    modifiedHTML: `
      <div class="icon-toolbar">
        <div class="icon-button">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
          <span>メニュー</span>
        </div>
        <div class="icon-button">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          <span>ダウンロード</span>
        </div>
        <div class="icon-button">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>完了</span>
        </div>
      </div>
    `,
    baseCSS: `
      .icon-toolbar {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
        justify-content: center;
      }
      .icon-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      .icon {
        width: 24px;
        height: 24px;
        fill: #333;
      }
      .icon-button span {
        font-size: 14px;
        color: #666;
      }
    `,
    modifiedCSS: `
      .icon-toolbar {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
        justify-content: center;
      }
      .icon-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      .icon {
        width: 24px;
        height: 24px;
        fill: #333;
      }
      .icon-button:nth-child(2) .icon {
        width: 25px;
        height: 25px;
      }
      .icon-button span {
        font-size: 14px;
        color: #666;
      }
    `,
    answerArea: {
      x: 375,
      y: 40,
      width: 90,
      height: 57
    }
  },

  {
    id: 'icon-image-4',
    category: 'icon-image',
    title: '画像の角丸',
    hint: '画像のひとつの角丸が1px違います',
    description: '中央の画像の角丸が8pxではなく9pxになっています',
    baseHTML: `
      <div class="image-gallery">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%2390caf9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20' font-weight='bold'%3E画像1%3C/text%3E%3C/svg%3E" alt="画像1" class="gallery-image">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23a5d6a7'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20' font-weight='bold'%3E画像2%3C/text%3E%3C/svg%3E" alt="画像2" class="gallery-image">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23ffab91'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20' font-weight='bold'%3E画像3%3C/text%3E%3C/svg%3E" alt="画像3" class="gallery-image">
      </div>
    `,
    modifiedHTML: `
      <div class="image-gallery">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%2390caf9'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20' font-weight='bold'%3E画像1%3C/text%3E%3C/svg%3E" alt="画像1" class="gallery-image">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23a5d6a7'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20' font-weight='bold'%3E画像2%3C/text%3E%3C/svg%3E" alt="画像2" class="gallery-image">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23ffab91'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20' font-weight='bold'%3E画像3%3C/text%3E%3C/svg%3E" alt="画像3" class="gallery-image">
      </div>
    `,
    baseCSS: `
      .image-gallery {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: white;
        justify-content: center;
      }
      .gallery-image {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }
    `,
    modifiedCSS: `
      .image-gallery {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: white;
        justify-content: center;
      }
      .gallery-image {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }
      .gallery-image:nth-child(2) {
        border-radius: 9px;
      }
    `,
    answerArea: {
      x: 305,
      y: 40,
      width: 150,
      height: 150
    }
  },

  // ボタン系 - 追加問題  
  {
    id: 'button-3',
    category: 'button-interactive',
    title: 'ボタンの横幅',
    hint: 'ボタンのひとつの横幅が1px違います',
    description: '「送信」ボタンの横幅が150pxではなく151pxになっています',
    baseHTML: `
      <div class="form-actions">
        <button class="action-btn cancel">キャンセル</button>
        <button class="action-btn submit">送信</button>
        <button class="action-btn reset">リセット</button>
      </div>
    `,
    modifiedHTML: `
      <div class="form-actions">
        <button class="action-btn cancel">キャンセル</button>
        <button class="action-btn submit">送信</button>
        <button class="action-btn reset">リセット</button>
      </div>
    `,
    baseCSS: `
      .form-actions {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #fafafa;
        justify-content: center;
      }
      .action-btn {
        width: 150px;
        padding: 12px 0;
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
      }
      .cancel {
        background: #e0e0e0;
        color: #666;
      }
      .submit {
        background: #2196f3;
        color: white;
      }
      .reset {
        background: #ff9800;
        color: white;
      }
    `,
    modifiedCSS: `
      .form-actions {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: #fafafa;
        justify-content: center;
      }
      .action-btn {
        width: 150px;
        padding: 12px 0;
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
      }
      .cancel {
        background: #e0e0e0;
        color: #666;
      }
      .submit {
        background: #2196f3;
        color: white;
        width: 151px;
      }
      .reset {
        background: #ff9800;
        color: white;
      }
    `,
    answerArea: {
      x: 205,
      y: 40,
      width: 151,
      height: 48
    }
  },

  {
    id: 'button-4',
    category: 'button-interactive',
    title: 'ボタンのマージン',
    hint: 'ボタン間の間隔が1px違います',
    description: 'ボタン間の間隔が20pxではなく19pxになっています',
    baseHTML: `
      <div class="button-row">
        <button class="btn">ボタン1</button>
        <button class="btn">ボタン2</button>
        <button class="btn">ボタン3</button>
        <button class="btn">ボタン4</button>
      </div>
    `,
    modifiedHTML: `
      <div class="button-row">
        <button class="btn">ボタン1</button>
        <button class="btn">ボタン2</button>
        <button class="btn">ボタン3</button>
        <button class="btn">ボタン4</button>
      </div>
    `,
    baseCSS: `
      .button-row {
        display: flex;
        gap: 20px;
        padding: 40px;
        background: white;
        justify-content: center;
      }
      .btn {
        padding: 10px 20px;
        background: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
    `,
    modifiedCSS: `
      .button-row {
        display: flex;
        gap: 19px;
        padding: 40px;
        background: white;
        justify-content: center;
      }
      .btn {
        padding: 10px 20px;
        background: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
    `,
    answerArea: {
      x: 326,
      y: 40,
      width: 19,
      height: 38
    }
  },

  // 背景・装飾系 - 追加問題
  {
    id: 'background-3',
    category: 'background',
    title: 'パターンの位置',
    hint: 'ストライプパターンの位置が1px違います',
    description: 'ストライプパターンが1px左にずれています',
    baseHTML: `
      <div class="pattern-container">
        <div class="pattern-box">パターン1</div>
        <div class="pattern-box">パターン2</div>
        <div class="pattern-box">パターン3</div>
      </div>
    `,
    modifiedHTML: `
      <div class="pattern-container">
        <div class="pattern-box">パターン1</div>
        <div class="pattern-box">パターン2</div>
        <div class="pattern-box">パターン3</div>
      </div>
    `,
    baseCSS: `
      .pattern-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
        justify-content: center;
      }
      .pattern-box {
        width: 180px;
        height: 120px;
        background: repeating-linear-gradient(
          45deg,
          #e3f2fd,
          #e3f2fd 10px,
          #bbdefb 10px,
          #bbdefb 20px
        );
        border: 2px solid #2196f3;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: #1565c0;
      }
    `,
    modifiedCSS: `
      .pattern-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #f5f5f5;
        justify-content: center;
      }
      .pattern-box {
        width: 180px;
        height: 120px;
        background: repeating-linear-gradient(
          45deg,
          #e3f2fd,
          #e3f2fd 10px,
          #bbdefb 10px,
          #bbdefb 20px
        );
        border: 2px solid #2196f3;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: #1565c0;
      }
      .pattern-box:nth-child(2) {
        background-position: -1px 0;
      }
    `,
    answerArea: {
      x: 240,
      y: 40,
      width: 184,
      height: 124
    }
  },

  {
    id: 'background-4',
    category: 'background',
    title: '背景のブラー効果',
    hint: 'ブラー効果の強さが1px違います',
    description: '背景のブラー効果が4pxではなく5pxになっています',
    baseHTML: `
      <div class="blur-container">
        <div class="blur-overlay">
          <h2>ぼかし効果</h2>
          <p>背景がぼかされています</p>
        </div>
      </div>
    `,
    modifiedHTML: `
      <div class="blur-container">
        <div class="blur-overlay">
          <h2>ぼかし効果</h2>
          <p>背景がぼかされています</p>
        </div>
      </div>
    `,
    baseCSS: `
      .blur-container {
        position: relative;
        width: 100%;
        height: 300px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%234fc3f7'/%3E%3Ccircle cx='50' cy='50' r='40' fill='%2329b6f6'/%3E%3C/svg%3E") repeat;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .blur-overlay {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(4px);
        padding: 40px 60px;
        border-radius: 12px;
        text-align: center;
      }
      .blur-overlay h2 {
        margin: 0 0 10px 0;
        font-size: 24px;
        color: #333;
      }
      .blur-overlay p {
        margin: 0;
        color: #666;
      }
    `,
    modifiedCSS: `
      .blur-container {
        position: relative;
        width: 100%;
        height: 300px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%234fc3f7'/%3E%3Ccircle cx='50' cy='50' r='40' fill='%2329b6f6'/%3E%3C/svg%3E") repeat;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .blur-overlay {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(5px);
        padding: 40px 60px;
        border-radius: 12px;
        text-align: center;
      }
      .blur-overlay h2 {
        margin: 0 0 10px 0;
        font-size: 24px;
        color: #333;
      }
      .blur-overlay p {
        margin: 0;
        color: #666;
      }
    `,
    answerArea: {
      x: 250,
      y: 75,
      width: 300,
      height: 150
    }
  },

  // シャドウ・エフェクト系 - 追加問題
  {
    id: 'shadow-effect-3',
    category: 'shadow-effect',
    title: 'テキストシャドウ',
    hint: 'テキストシャドウの位置が1px違います',
    description: 'タイトルのテキストシャドウが2pxではなく3px下にずれています',
    baseHTML: `
      <div class="hero-section">
        <h1 class="hero-title">Shadow Text</h1>
        <p class="hero-subtitle">美しいシャドウ効果</p>
      </div>
    `,
    modifiedHTML: `
      <div class="hero-section">
        <h1 class="hero-title">Shadow Text</h1>
        <p class="hero-subtitle">美しいシャドウ効果</p>
      </div>
    `,
    baseCSS: `
      .hero-section {
        padding: 80px 40px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        text-align: center;
      }
      .hero-title {
        font-size: 48px;
        font-weight: 700;
        color: white;
        margin: 0 0 20px 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
      .hero-subtitle {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
      }
    `,
    modifiedCSS: `
      .hero-section {
        padding: 80px 40px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        text-align: center;
      }
      .hero-title {
        font-size: 48px;
        font-weight: 700;
        color: white;
        margin: 0 0 20px 0;
        text-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
      }
      .hero-subtitle {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
      }
    `,
    answerArea: {
      x: 200,
      y: 80,
      width: 400,
      height: 60
    }
  },

  {
    id: 'shadow-effect-4',
    category: 'shadow-effect',
    title: 'インセットシャドウ',
    hint: 'インセットシャドウの深さが1px違います',
    description: '入力フィールドのインセットシャドウが1pxではなく2pxになっています',
    baseHTML: `
      <div class="search-container">
        <input type="search" class="search-input" placeholder="検索...">
        <button class="search-button">検索</button>
      </div>
    `,
    modifiedHTML: `
      <div class="search-container">
        <input type="search" class="search-input" placeholder="検索...">
        <button class="search-button">検索</button>
      </div>
    `,
    baseCSS: `
      .search-container {
        display: flex;
        gap: 10px;
        padding: 60px 40px;
        background: #f8f9fa;
        justify-content: center;
      }
      .search-input {
        width: 300px;
        padding: 12px 20px;
        border: 1px solid #ddd;
        border-radius: 24px;
        font-size: 16px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
      }
      .search-button {
        padding: 12px 24px;
        background: #2196f3;
        color: white;
        border: none;
        border-radius: 24px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
      }
    `,
    modifiedCSS: `
      .search-container {
        display: flex;
        gap: 10px;
        padding: 60px 40px;
        background: #f8f9fa;
        justify-content: center;
      }
      .search-input {
        width: 300px;
        padding: 12px 20px;
        border: 1px solid #ddd;
        border-radius: 24px;
        font-size: 16px;
        box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
      }
      .search-button {
        padding: 12px 24px;
        background: #2196f3;
        color: white;
        border: none;
        border-radius: 24px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
      }
    `,
    answerArea: {
      x: 235,
      y: 60,
      width: 300,
      height: 48
    }
  },

  // レスポンシブ系 - 追加問題
  {
    id: 'responsive-3',
    category: 'responsive',
    title: 'メディアクエリのブレークポイント',
    hint: 'レスポンシブ切り替えポイントが1px違います',
    description: 'タブレット表示の切り替えが768pxではなく769pxで発生します',
    baseHTML: `
      <div class="responsive-grid">
        <div class="grid-item">アイテム1</div>
        <div class="grid-item">アイテム2</div>
        <div class="grid-item">アイテム3</div>
        <div class="grid-item">アイテム4</div>
      </div>
    `,
    modifiedHTML: `
      <div class="responsive-grid">
        <div class="grid-item">アイテム1</div>
        <div class="grid-item">アイテム2</div>
        <div class="grid-item">アイテム3</div>
        <div class="grid-item">アイテム4</div>
      </div>
    `,
    baseCSS: `
      .responsive-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        padding: 40px;
        background: #f5f5f5;
      }
      @media (max-width: 768px) {
        .responsive-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      .grid-item {
        background: white;
        padding: 30px;
        text-align: center;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `,
    modifiedCSS: `
      .responsive-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        padding: 40px;
        background: #f5f5f5;
      }
      @media (max-width: 769px) {
        .responsive-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      .grid-item {
        background: white;
        padding: 30px;
        text-align: center;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `,
    answerArea: {
      x: 40,
      y: 40,
      width: 720,
      height: 220
    }
  },

  {
    id: 'responsive-4',
    category: 'responsive',
    title: 'フレックスアイテムの最小幅',
    hint: 'フレックスアイテムの最小幅が1px違います',
    description: '各アイテムの最小幅が200pxではなく201pxになっています',
    baseHTML: `
      <div class="flex-container">
        <div class="flex-item">フレックス1</div>
        <div class="flex-item">フレックス2</div>
        <div class="flex-item">フレックス3</div>
      </div>
    `,
    modifiedHTML: `
      <div class="flex-container">
        <div class="flex-item">フレックス1</div>
        <div class="flex-item">フレックス2</div>
        <div class="flex-item">フレックス3</div>
      </div>
    `,
    baseCSS: `
      .flex-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 40px;
        background: white;
      }
      .flex-item {
        flex: 1 1 200px;
        min-width: 200px;
        background: #e8f5e9;
        border: 2px solid #4caf50;
        padding: 30px;
        text-align: center;
        border-radius: 8px;
        font-weight: 600;
        color: #2e7d32;
      }
    `,
    modifiedCSS: `
      .flex-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 40px;
        background: white;
      }
      .flex-item {
        flex: 1 1 200px;
        min-width: 201px;
        background: #e8f5e9;
        border: 2px solid #4caf50;
        padding: 30px;
        text-align: center;
        border-radius: 8px;
        font-weight: 600;
        color: #2e7d32;
      }
    `,
    answerArea: {
      x: 40,
      y: 40,
      width: 720,
      height: 134
    }
  },

  // アニメーション系 - 追加問題
  {
    id: 'animation-3',
    category: 'animation',
    title: 'ホバー時の移動量',
    hint: 'ホバー時の移動量が1px違います',
    description: 'ホバー時に上に移動する量が4pxではなく5pxになっています',
    baseHTML: `
      <div class="card-container">
        <div class="hover-card">
          <h3>カード1</h3>
          <p>ホバーで浮き上がります</p>
        </div>
        <div class="hover-card">
          <h3>カード2</h3>
          <p>ホバーで浮き上がります</p>
        </div>
        <div class="hover-card">
          <h3>カード3</h3>
          <p>ホバーで浮き上がります</p>
        </div>
      </div>
    `,
    modifiedHTML: `
      <div class="card-container">
        <div class="hover-card">
          <h3>カード1</h3>
          <p>ホバーで浮き上がります</p>
        </div>
        <div class="hover-card">
          <h3>カード2</h3>
          <p>ホバーで浮き上がります</p>
        </div>
        <div class="hover-card">
          <h3>カード3</h3>
          <p>ホバーで浮き上がります</p>
        </div>
      </div>
    `,
    baseCSS: `
      .card-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #fafafa;
        justify-content: center;
      }
      .hover-card {
        width: 200px;
        padding: 30px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      }
      .hover-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }
      .hover-card h3 {
        margin: 0 0 10px 0;
        font-size: 20px;
        color: #333;
      }
      .hover-card p {
        margin: 0;
        color: #666;
        font-size: 14px;
      }
    `,
    modifiedCSS: `
      .card-container {
        display: flex;
        gap: 30px;
        padding: 40px;
        background: #fafafa;
        justify-content: center;
      }
      .hover-card {
        width: 200px;
        padding: 30px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      }
      .hover-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }
      .hover-card h3 {
        margin: 0 0 10px 0;
        font-size: 20px;
        color: #333;
      }
      .hover-card p {
        margin: 0;
        color: #666;
        font-size: 14px;
      }
    `,
    answerArea: {
      x: 40,
      y: 40,
      width: 720,
      height: 158
    }
  },

  {
    id: 'animation-4',
    category: 'animation',
    title: 'アニメーションの遅延',
    hint: 'アニメーションの遅延が0.01秒違います',
    description: '2番目のドットのアニメーション遅延が0.1秒ではなく0.11秒になっています',
    baseHTML: `
      <div class="loading-dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    `,
    modifiedHTML: `
      <div class="loading-dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    `,
    baseCSS: `
      .loading-dots {
        display: flex;
        gap: 10px;
        padding: 60px;
        background: white;
        justify-content: center;
        align-items: center;
      }
      .dot {
        width: 12px;
        height: 12px;
        background: #2196f3;
        border-radius: 50%;
        animation: bounce 1.4s infinite ease-in-out;
      }
      .dot:nth-child(1) {
        animation-delay: 0s;
      }
      .dot:nth-child(2) {
        animation-delay: 0.1s;
      }
      .dot:nth-child(3) {
        animation-delay: 0.2s;
      }
      @keyframes bounce {
        0%, 80%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        40% {
          transform: scale(1.3);
          opacity: 0.7;
        }
      }
    `,
    modifiedCSS: `
      .loading-dots {
        display: flex;
        gap: 10px;
        padding: 60px;
        background: white;
        justify-content: center;
        align-items: center;
      }
      .dot {
        width: 12px;
        height: 12px;
        background: #2196f3;
        border-radius: 50%;
        animation: bounce 1.4s infinite ease-in-out;
      }
      .dot:nth-child(1) {
        animation-delay: 0s;
      }
      .dot:nth-child(2) {
        animation-delay: 0.11s;
      }
      .dot:nth-child(3) {
        animation-delay: 0.2s;
      }
      @keyframes bounce {
        0%, 80%, 100% {
          transform: scale(1);
          opacity: 1;
        }
        40% {
          transform: scale(1.3);
          opacity: 0.7;
        }
      }
    `,
    answerArea: {
      x: 390,
      y: 54,
      width: 12,
      height: 12
    }
  },

  // グリッドレイアウト系 - 追加問題2
  {
    id: 'grid-5',
    category: 'grid-layout',
    title: 'グリッドアイテムの配置',
    hint: 'グリッドアイテムのひとつの配置が1pxずれています',
    description: '左上のグリッドアイテムが1px右にずれています',
    baseHTML: `
      <div class="grid-wrapper">
        <div class="grid-box">1</div>
        <div class="grid-box">2</div>
        <div class="grid-box">3</div>
        <div class="grid-box">4</div>
      </div>
    `,
    modifiedHTML: `
      <div class="grid-wrapper">
        <div class="grid-box">1</div>
        <div class="grid-box">2</div>
        <div class="grid-box">3</div>
        <div class="grid-box">4</div>
      </div>
    `,
    baseCSS: `
      .grid-wrapper {
        display: grid;
        grid-template-columns: 100px 100px;
        grid-template-rows: 100px 100px;
        gap: 30px;
        padding: 40px;
        background: #f0f0f0;
        justify-content: center;
      }
      .grid-box {
        background: #673ab7;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        border-radius: 8px;
      }
    `,
    modifiedCSS: `
      .grid-wrapper {
        display: grid;
        grid-template-columns: 100px 100px;
        grid-template-rows: 100px 100px;
        gap: 30px;
        padding: 40px;
        background: #f0f0f0;
        justify-content: center;
      }
      .grid-box {
        background: #673ab7;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        border-radius: 8px;
      }
      .grid-box:first-child {
        margin-left: 1px;
      }
    `,
    answerArea: {
      x: 290,
      y: 40,
      width: 101,
      height: 100
    }
  },

  {
    id: 'grid-6',
    category: 'grid-layout',
    title: 'グリッドテンプレートの行の高さ',
    hint: 'グリッドの行の高さが1px違います',
    description: '2行目の高さが80pxではなく81pxになっています',
    baseHTML: `
      <div class="row-grid">
        <div class="row-item">Header</div>
        <div class="row-item">Content</div>
        <div class="row-item">Footer</div>
      </div>
    `,
    modifiedHTML: `
      <div class="row-grid">
        <div class="row-item">Header</div>
        <div class="row-item">Content</div>
        <div class="row-item">Footer</div>
      </div>
    `,
    baseCSS: `
      .row-grid {
        display: grid;
        grid-template-rows: 60px 80px 60px;
        gap: 20px;
        width: 400px;
        margin: 40px auto;
      }
      .row-item {
        background: #ff5722;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        border-radius: 6px;
      }
    `,
    modifiedCSS: `
      .row-grid {
        display: grid;
        grid-template-rows: 60px 81px 60px;
        gap: 20px;
        width: 400px;
        margin: 40px auto;
      }
      .row-item {
        background: #ff5722;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        border-radius: 6px;
      }
    `,
    answerArea: {
      x: 200,
      y: 120,
      width: 400,
      height: 81
    }
  },

  // ボーダー系 - 追加問題2
  {
    id: 'border-5',
    category: 'border',
    title: '枠線の位置',
    hint: '枠線の位置が1pxずれています',
    description: '右側の枠線が1px内側にずれています',
    baseHTML: `
      <div class="border-container">
        <div class="border-box">枠線の位置</div>
      </div>
    `,
    modifiedHTML: `
      <div class="border-container">
        <div class="border-box">枠線の位置</div>
      </div>
    `,
    baseCSS: `
      .border-container {
        padding: 60px;
        background: #f5f5f5;
      }
      .border-box {
        width: 300px;
        height: 150px;
        margin: 0 auto;
        background: white;
        border: 3px solid #e91e63;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 600;
        color: #333;
      }
    `,
    modifiedCSS: `
      .border-container {
        padding: 60px;
        background: #f5f5f5;
      }
      .border-box {
        width: 300px;
        height: 150px;
        margin: 0 auto;
        background: white;
        border: 3px solid #e91e63;
        border-right-width: 4px;
        margin-right: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 600;
        color: #333;
      }
    `,
    answerArea: {
      x: 553,
      y: 60,
      width: 4,
      height: 156
    }
  },

  {
    id: 'border-6',
    category: 'border',
    title: 'ボーダースタイルの混在',
    hint: '一部のボーダーの太さが1px違います',
    description: '下線の太さが2pxではなく3pxになっています',
    baseHTML: `
      <nav class="nav-menu">
        <a href="#" class="nav-link">ホーム</a>
        <a href="#" class="nav-link active">サービス</a>
        <a href="#" class="nav-link">お問い合わせ</a>
      </nav>
    `,
    modifiedHTML: `
      <nav class="nav-menu">
        <a href="#" class="nav-link">ホーム</a>
        <a href="#" class="nav-link active">サービス</a>
        <a href="#" class="nav-link">お問い合わせ</a>
      </nav>
    `,
    baseCSS: `
      .nav-menu {
        display: flex;
        gap: 40px;
        padding: 40px;
        background: white;
        justify-content: center;
      }
      .nav-link {
        padding: 10px 20px;
        text-decoration: none;
        color: #666;
        font-weight: 500;
        border-bottom: 2px solid transparent;
        transition: all 0.3s;
      }
      .nav-link.active {
        color: #2196f3;
        border-bottom-color: #2196f3;
      }
    `,
    modifiedCSS: `
      .nav-menu {
        display: flex;
        gap: 40px;
        padding: 40px;
        background: white;
        justify-content: center;
      }
      .nav-link {
        padding: 10px 20px;
        text-decoration: none;
        color: #666;
        font-weight: 500;
        border-bottom: 2px solid transparent;
        transition: all 0.3s;
      }
      .nav-link.active {
        color: #2196f3;
        border-bottom: 3px solid #2196f3;
      }
    `,
    answerArea: {
      x: 335,
      y: 70,
      width: 130,
      height: 3
    }
  },

  // スペーシング系 - 追加問題2
  {
    id: 'spacing-5',
    category: 'spacing',
    title: 'コンテナの内側余白',
    hint: 'コンテナの内側余白が1px違います',
    description: 'コンテナの上部パディングが40pxではなく41pxになっています',
    baseHTML: `
      <div class="content-container">
        <h2>コンテンツタイトル</h2>
        <p>ここにコンテンツの本文が入ります。</p>
        <p>追加のコンテンツテキストです。</p>
        <a href="#" class="read-more">続きを読む</a>
      </div>
    `,
    modifiedHTML: `
      <div class="content-container">
        <h2>コンテンツタイトル</h2>
        <p>ここにコンテンツの本文が入ります。</p>
        <p>追加のコンテンツテキストです。</p>
        <a href="#" class="read-more">続きを読む</a>
      </div>
    `,
    baseCSS: `
      .content-container {
        padding: 40px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 20px auto;
      }
      .content-container h2 {
        margin: 0 0 20px 0;
        color: #333;
        font-size: 24px;
      }
      .content-container p {
        margin: 0 0 15px 0;
        color: #666;
        line-height: 1.6;
      }
      .content-container p:last-of-type {
        margin-bottom: 20px;
      }
      .content-container .read-more {
        color: #2196f3;
        text-decoration: none;
        font-weight: 500;
      }
      .content-container .read-more:hover {
        text-decoration: underline;
      }
    `,
    modifiedCSS: `
      .content-container {
        padding: 41px 40px 40px 40px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 20px auto;
      }
      .content-container h2 {
        margin: 0 0 20px 0;
        color: #333;
        font-size: 24px;
      }
      .content-container p {
        margin: 0 0 15px 0;
        color: #666;
        line-height: 1.6;
      }
      .content-container p:last-of-type {
        margin-bottom: 20px;
      }
      .content-container .read-more {
        color: #2196f3;
        text-decoration: none;
        font-weight: 500;
      }
      .content-container .read-more:hover {
        text-decoration: underline;
      }
    `,
    answerArea: {
      x: 100,
      y: 20,
      width: 600,
      height: 41
    }
  },

  {
    id: 'spacing-6',
    category: 'spacing',
    title: '要素間の垂直マージン',
    hint: '要素間の垂直マージンが1px違います',
    description: '段落間のマージンが16pxではなく17pxになっています',
    baseHTML: `
      <article class="article">
        <p class="paragraph">最初の段落のテキストです。</p>
        <p class="paragraph">2番目の段落のテキストです。</p>
        <p class="paragraph">3番目の段落のテキストです。</p>
      </article>
    `,
    modifiedHTML: `
      <article class="article">
        <p class="paragraph">最初の段落のテキストです。</p>
        <p class="paragraph">2番目の段落のテキストです。</p>
        <p class="paragraph">3番目の段落のテキストです。</p>
      </article>
    `,
    baseCSS: `
      .article {
        padding: 40px;
        background: #fafafa;
        max-width: 500px;
        margin: 0 auto;
      }
      .paragraph {
        margin: 0 0 16px 0;
        padding: 20px;
        background: white;
        border-left: 4px solid #4caf50;
        color: #333;
        line-height: 1.6;
      }
      .paragraph:last-child {
        margin-bottom: 0;
      }
    `,
    modifiedCSS: `
      .article {
        padding: 40px;
        background: #fafafa;
        max-width: 500px;
        margin: 0 auto;
      }
      .paragraph {
        margin: 0 0 17px 0;
        padding: 20px;
        background: white;
        border-left: 4px solid #4caf50;
        color: #333;
        line-height: 1.6;
      }
      .paragraph:last-child {
        margin-bottom: 0;
      }
    `,
    answerArea: {
      x: 150,
      y: 108,
      width: 500,
      height: 17
    }
  },

  // テキスト系 - 追加問題2
  {
    id: 'text-5',
    category: 'text',
    title: '文字の間隔',
    hint: '文字の間隔が1px違います',
    description: 'タイトルの文字間隔（letter-spacing）が2pxではなく3pxになっています',
    baseHTML: `
      <div class="text-section">
        <h1 class="spaced-title">WELCOME</h1>
        <p class="subtitle">私たちのサイトへようこそ</p>
      </div>
    `,
    modifiedHTML: `
      <div class="text-section">
        <h1 class="spaced-title">WELCOME</h1>
        <p class="subtitle">私たちのサイトへようこそ</p>
      </div>
    `,
    baseCSS: `
      .text-section {
        text-align: center;
        padding: 60px 40px;
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
      }
      .spaced-title {
        font-size: 48px;
        font-weight: 300;
        color: #212529;
        margin: 0 0 20px 0;
        letter-spacing: 2px;
      }
      .subtitle {
        font-size: 18px;
        color: #6c757d;
        margin: 0;
      }
    `,
    modifiedCSS: `
      .text-section {
        text-align: center;
        padding: 60px 40px;
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
      }
      .spaced-title {
        font-size: 48px;
        font-weight: 300;
        color: #212529;
        margin: 0 0 20px 0;
        letter-spacing: 3px;
      }
      .subtitle {
        font-size: 18px;
        color: #6c757d;
        margin: 0;
      }
    `,
    answerArea: {
      x: 200,
      y: 60,
      width: 400,
      height: 58
    }
  },

  {
    id: 'text-6',
    category: 'text',
    title: 'テキストのインデント',
    hint: 'テキストのインデントが1px違います',
    description: '段落の字下げが20pxではなく21pxになっています',
    baseHTML: `
      <div class="text-content">
        <p class="indented">これは字下げされた段落です。最初の行だけがインデントされています。</p>
        <p class="indented">2つ目の段落も同様に字下げされています。</p>
      </div>
    `,
    modifiedHTML: `
      <div class="text-content">
        <p class="indented">これは字下げされた段落です。最初の行だけがインデントされています。</p>
        <p class="indented">2つ目の段落も同様に字下げされています。</p>
      </div>
    `,
    baseCSS: `
      .text-content {
        padding: 40px;
        background: white;
        max-width: 600px;
        margin: 0 auto;
      }
      .indented {
        text-indent: 20px;
        line-height: 1.8;
        color: #333;
        margin: 0 0 20px 0;
      }
      .indented:last-child {
        margin-bottom: 0;
      }
    `,
    modifiedCSS: `
      .text-content {
        padding: 40px;
        background: white;
        max-width: 600px;
        margin: 0 auto;
      }
      .indented {
        text-indent: 21px;
        line-height: 1.8;
        color: #333;
        margin: 0 0 20px 0;
      }
      .indented:last-child {
        margin-bottom: 0;
      }
    `,
    answerArea: {
      x: 100,
      y: 40,
      width: 21,
      height: 29
    }
  },

  // アイコン・画像系 - 追加問題2
  {
    id: 'icon-image-5',
    category: 'icon-image',
    title: 'アイコンの位置',
    hint: 'アイコンの位置が1pxずれています',
    description: '中央のチェックマークアイコンが1px上にずれています',
    baseHTML: `
      <div class="feature-list">
        <div class="feature-item">
          <svg class="check-icon" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <span>高速処理</span>
        </div>
        <div class="feature-item">
          <svg class="check-icon" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <span>安全性保証</span>
        </div>
        <div class="feature-item">
          <svg class="check-icon" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <span>24時間サポート</span>
        </div>
      </div>
    `,
    modifiedHTML: `
      <div class="feature-list">
        <div class="feature-item">
          <svg class="check-icon" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <span>高速処理</span>
        </div>
        <div class="feature-item" style="margin-top: -1px;">
          <svg class="check-icon" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <span>安全性保証</span>
        </div>
        <div class="feature-item">
          <svg class="check-icon" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
          <span>24時間サポート</span>
        </div>
      </div>
    `,
    baseCSS: `
      .feature-list {
        padding: 40px;
        background: #f8f9fa;
        border-radius: 8px;
      }
      .feature-item {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
        font-size: 16px;
      }
      .check-icon {
        width: 24px;
        height: 24px;
        fill: #22c55e;
      }
      .feature-item span {
        color: #333;
        font-size: 16px;
      }
    `,
    modifiedCSS: `
      .feature-list {
        padding: 40px;
        background: #f8f9fa;
        border-radius: 8px;
      }
      .feature-item {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
        font-size: 16px;
      }
      .check-icon {
        width: 24px;
        height: 24px;
        fill: #22c55e;
      }
      .feature-item span {
        color: #333;
        font-size: 16px;
      }
    `,
    answerArea: {
      x: 40,
      y: 83,
      width: 720,
      height: 24
    }
  },

  {
    id: 'icon-image-6',
    category: 'icon-image',
    title: '画像のアスペクト比',
    hint: '画像の高さが1px違います',
    description: '中央のサムネイル画像の高さが100pxではなく101pxになっています',
    baseHTML: `
      <div class="thumbnail-grid">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='100'%3E%3Crect width='150' height='100' fill='%23ff9800'/%3E%3C/svg%3E" alt="サムネイル1" class="thumbnail">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='100'%3E%3Crect width='150' height='100' fill='%233f51b5'/%3E%3C/svg%3E" alt="サムネイル2" class="thumbnail">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='100'%3E%3Crect width='150' height='100' fill='%234caf50'/%3E%3C/svg%3E" alt="サムネイル3" class="thumbnail">
      </div>
    `,
    modifiedHTML: `
      <div class="thumbnail-grid">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='100'%3E%3Crect width='150' height='100' fill='%23ff9800'/%3E%3C/svg%3E" alt="サムネイル1" class="thumbnail">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='100'%3E%3Crect width='150' height='100' fill='%233f51b5'/%3E%3C/svg%3E" alt="サムネイル2" class="thumbnail">
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='100'%3E%3Crect width='150' height='100' fill='%234caf50'/%3E%3C/svg%3E" alt="サムネイル3" class="thumbnail">
      </div>
    `,
    baseCSS: `
      .thumbnail-grid {
        display: flex;
        gap: 20px;
        padding: 50px;
        background: white;
        justify-content: center;
      }
      .thumbnail {
        width: 150px;
        height: 100px;
        object-fit: cover;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `,
    modifiedCSS: `
      .thumbnail-grid {
        display: flex;
        gap: 20px;
        padding: 50px;
        background: white;
        justify-content: center;
      }
      .thumbnail {
        width: 150px;
        height: 100px;
        object-fit: cover;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .thumbnail:nth-child(2) {
        height: 101px;
      }
    `,
    answerArea: {
      x: 295,
      y: 50,
      width: 150,
      height: 101
    }
  },

  // ボタン系 - 追加問題2
  {
    id: 'button-5',
    category: 'button-interactive',
    title: 'ボタンの影',
    hint: 'ボタンの影の位置が1px違います',
    description: '中央のボタンの影が4pxではなく5px下にずれています',
    baseHTML: `
      <div class="button-container">
        <button class="btn-primary">ホーム</button>
        <button class="btn-primary">プロフィール</button>
        <button class="btn-primary">設定</button>
        <button class="btn-primary">ログアウト</button>
      </div>
    `,
    modifiedHTML: `
      <div class="button-container">
        <button class="btn-primary">ホーム</button>
        <button class="btn-primary">プロフィール</button>
        <button class="btn-primary">設定</button>
        <button class="btn-primary">ログアウト</button>
      </div>
    `,
    baseCSS: `
      .button-container {
        display: flex;
        gap: 20px;
        padding: 60px 40px;
        background: #f5f5f5;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn-primary {
        padding: 14px 28px;
        background: #ec4899;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(236, 72, 153, 0.3);
        transition: all 0.2s;
      }
      .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 8px rgba(236, 72, 153, 0.4);
      }
    `,
    modifiedCSS: `
      .button-container {
        display: flex;
        gap: 20px;
        padding: 60px 40px;
        background: #f5f5f5;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn-primary {
        padding: 14px 28px;
        background: #ec4899;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(236, 72, 153, 0.3);
        transition: all 0.2s;
      }
      .btn-primary:nth-child(2) {
        box-shadow: 0 5px 6px rgba(236, 72, 153, 0.3);
      }
      .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 8px rgba(236, 72, 153, 0.4);
      }
      .btn-primary:nth-child(2):hover {
        box-shadow: 0 7px 8px rgba(236, 72, 153, 0.4);
      }
    `,
    answerArea: {
      x: 206,
      y: 96,  // ボタンの下部（影の部分）
      width: 179,
      height: 10  // 影の高さ（5px+周辺）
    }
  },

  {
    id: 'button-6',
    category: 'button-interactive',
    title: 'ボタンのボーダー半径',
    hint: 'ボタンの角丸が1px違います',
    description: '「メッセージ」ボタンの角丸が24pxではなく25pxになっています',
    baseHTML: `
      <div class="pill-buttons">
        <button class="pill-btn">フォロー</button>
        <button class="pill-btn">メッセージ</button>
        <button class="pill-btn">通知</button>
      </div>
    `,
    modifiedHTML: `
      <div class="pill-buttons">
        <button class="pill-btn">フォロー</button>
        <button class="pill-btn">メッセージ</button>
        <button class="pill-btn">通知</button>
      </div>
    `,
    baseCSS: `
      .pill-buttons {
        display: flex;
        gap: 20px;
        padding: 50px;
        background: white;
        justify-content: center;
      }
      .pill-btn {
        padding: 10px 30px;
        background: #1da1f2;
        color: white;
        border: none;
        border-radius: 24px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.2s;
      }
      .pill-btn:hover {
        opacity: 0.9;
      }
    `,
    modifiedCSS: `
      .pill-buttons {
        display: flex;
        gap: 20px;
        padding: 50px;
        background: white;
        justify-content: center;
      }
      .pill-btn {
        padding: 10px 30px;
        background: #1da1f2;
        color: white;
        border: none;
        border-radius: 24px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.2s;
      }
      .pill-btn:nth-child(2) {
        border-radius: 25px;
      }
      .pill-btn:hover {
        opacity: 0.9;
      }
    `,
    answerArea: {
      x: 176,
      y: 50,
      width: 132,
      height: 44
    }
  },

  // 背景・装飾系 - 追加問題2
  {
    id: 'background-5',
    category: 'background',
    title: 'グラデーションの停止位置',
    hint: 'グラデーションの色の切り替わり位置が1%違います',
    description: 'グラデーションの切り替わりが50%ではなく51%の位置になっています',
    baseHTML: `
      <div class="gradient-split">
        <div class="content">
          <h3>Split Background</h3>
        </div>
      </div>
    `,
    modifiedHTML: `
      <div class="gradient-split">
        <div class="content">
          <h3>Split Background</h3>
        </div>
      </div>
    `,
    baseCSS: `
      .gradient-split {
        width: 100%;
        height: 200px;
        background: linear-gradient(to right, #e91e63 50%, #2196f3 50%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .content {
        background: white;
        padding: 20px 40px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      }
      .content h3 {
        margin: 0;
        color: #333;
      }
    `,
    modifiedCSS: `
      .gradient-split {
        width: 100%;
        height: 200px;
        background: linear-gradient(to right, #e91e63 51%, #2196f3 51%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .content {
        background: white;
        padding: 20px 40px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      }
      .content h3 {
        margin: 0;
        color: #333;
      }
    `,
    answerArea: {
      x: 400,
      y: 0,
      width: 8,
      height: 200
    }
  },

  {
    id: 'background-6',
    category: 'background',
    title: '背景画像のサイズ',
    hint: '背景画像のサイズが1px違います',
    description: '背景パターンのサイズが50pxではなく51pxになっています',
    baseHTML: `
      <div class="pattern-bg">
        <div class="pattern-content">
          パターン背景
        </div>
      </div>
    `,
    modifiedHTML: `
      <div class="pattern-bg">
        <div class="pattern-content">
          パターン背景
        </div>
      </div>
    `,
    baseCSS: `
      .pattern-bg {
        width: 100%;
        height: 300px;
        background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='25' height='25' fill='%23f0f0f0'/%3E%3Crect x='25' y='25' width='25' height='25' fill='%23f0f0f0'/%3E%3C/svg%3E");
        background-size: 50px 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .pattern-content {
        background: white;
        padding: 30px 50px;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }
    `,
    modifiedCSS: `
      .pattern-bg {
        width: 100%;
        height: 300px;
        background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='25' height='25' fill='%23f0f0f0'/%3E%3Crect x='25' y='25' width='25' height='25' fill='%23f0f0f0'/%3E%3C/svg%3E");
        background-size: 51px 51px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .pattern-content {
        background: white;
        padding: 30px 50px;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }
    `,
    answerArea: {
      x: 0,
      y: 0,
      width: 800,
      height: 300
    }
  },

  // シャドウ・エフェクト系 - 追加問題2
  {
    id: 'shadow-effect-5',
    category: 'shadow-effect',
    title: '複数の影',
    hint: '複数の影のうち1つが1pxずれています',
    description: '2つ目の影が6pxではなく7px右にずれています',
    baseHTML: `
      <div class="multi-shadow">
        <div class="shadow-card">
          Multiple Shadows
        </div>
      </div>
    `,
    modifiedHTML: `
      <div class="multi-shadow">
        <div class="shadow-card">
          Multiple Shadows
        </div>
      </div>
    `,
    baseCSS: `
      .multi-shadow {
        padding: 80px;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
      }
      .shadow-card {
        width: 250px;
        padding: 40px;
        background: white;
        border-radius: 12px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        color: #333;
        box-shadow: 
          0 2px 4px rgba(0, 0, 0, 0.1),
          6px 6px 12px rgba(0, 0, 0, 0.15);
      }
    `,
    modifiedCSS: `
      .multi-shadow {
        padding: 80px;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
      }
      .shadow-card {
        width: 250px;
        padding: 40px;
        background: white;
        border-radius: 12px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        color: #333;
        box-shadow: 
          0 2px 4px rgba(0, 0, 0, 0.1),
          7px 6px 12px rgba(0, 0, 0, 0.15);
      }
    `,
    answerArea: {
      x: 275,
      y: 80,
      width: 270,
      height: 132
    }
  },

  {
    id: 'shadow-effect-6',
    category: 'shadow-effect',
    title: 'アウトラインの影',
    hint: 'アウトラインのぼかしが1px違います',
    description: 'フォーカス時のアウトラインのぼかしが0pxではなく1pxになっています',
    baseHTML: `
      <div class="outline-container">
        <button class="outline-button" autofocus>クリックしてください</button>
      </div>
    `,
    modifiedHTML: `
      <div class="outline-container">
        <button class="outline-button" autofocus>クリックしてください</button>
      </div>
    `,
    baseCSS: `
      .outline-container {
        padding: 60px;
        background: white;
        display: flex;
        justify-content: center;
      }
      .outline-button {
        padding: 16px 40px;
        background: #9c27b0;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .outline-button:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(156, 39, 176, 0.4);
      }
    `,
    modifiedCSS: `
      .outline-container {
        padding: 60px;
        background: white;
        display: flex;
        justify-content: center;
      }
      .outline-button {
        padding: 16px 40px;
        background: #9c27b0;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .outline-button:focus {
        outline: none;
        box-shadow: 0 0 1px 3px rgba(156, 39, 176, 0.4);
      }
    `,
    answerArea: {
      x: 270,
      y: 57,
      width: 260,
      height: 66
    }
  },

  // レスポンシブ系 - 追加問題2
  {
    id: 'responsive-5',
    category: 'responsive',
    title: 'ビューポートの幅',
    hint: 'コンテナの最大幅が1px違います',
    description: 'コンテナの最大幅が1200pxではなく1201pxになっています',
    baseHTML: `
      <div class="max-width-container">
        <div class="container-content">
          <h2>最大幅のコンテナ</h2>
          <p>このコンテナには最大幅が設定されています。</p>
        </div>
      </div>
    `,
    modifiedHTML: `
      <div class="max-width-container">
        <div class="container-content">
          <h2>最大幅のコンテナ</h2>
          <p>このコンテナには最大幅が設定されています。</p>
        </div>
      </div>
    `,
    baseCSS: `
      .max-width-container {
        width: 100%;
        padding: 40px 20px;
        background: #f0f0f0;
      }
      .container-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      .container-content h2 {
        margin: 0 0 16px 0;
        color: #333;
      }
      .container-content p {
        margin: 0;
        color: #666;
        line-height: 1.6;
      }
    `,
    modifiedCSS: `
      .max-width-container {
        width: 100%;
        padding: 40px 20px;
        background: #f0f0f0;
      }
      .container-content {
        max-width: 1201px;
        margin: 0 auto;
        padding: 40px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      .container-content h2 {
        margin: 0 0 16px 0;
        color: #333;
      }
      .container-content p {
        margin: 0;
        color: #666;
        line-height: 1.6;
      }
    `,
    answerArea: {
      x: 0,
      y: 40,
      width: 800,
      height: 168
    }
  },

  {
    id: 'responsive-6',
    category: 'responsive',
    title: 'フレックスボックスのギャップ',
    hint: 'フレックスボックスのギャップが1px違います',
    description: 'アイテム間のギャップが24pxではなく25pxになっています',
    baseHTML: `
      <div class="flex-gap-container">
        <div class="flex-gap-item">Item 1</div>
        <div class="flex-gap-item">Item 2</div>
        <div class="flex-gap-item">Item 3</div>
      </div>
    `,
    modifiedHTML: `
      <div class="flex-gap-container">
        <div class="flex-gap-item">Item 1</div>
        <div class="flex-gap-item">Item 2</div>
        <div class="flex-gap-item">Item 3</div>
      </div>
    `,
    baseCSS: `
      .flex-gap-container {
        display: flex;
        gap: 24px;
        padding: 40px;
        background: white;
        justify-content: center;
      }
      .flex-gap-item {
        padding: 30px;
        background: #00bcd4;
        color: white;
        border-radius: 8px;
        font-weight: 600;
        text-align: center;
        min-width: 120px;
      }
    `,
    modifiedCSS: `
      .flex-gap-container {
        display: flex;
        gap: 25px;
        padding: 40px;
        background: white;
        justify-content: center;
      }
      .flex-gap-item {
        padding: 30px;
        background: #00bcd4;
        color: white;
        border-radius: 8px;
        font-weight: 600;
        text-align: center;
        min-width: 120px;
      }
    `,
    answerArea: {
      x: 264,
      y: 40,
      width: 25,
      height: 92
    }
  },

  // アニメーション系 - 追加問題2
  {
    id: 'animation-5',
    category: 'animation',
    title: '回転の中心点',
    hint: '回転の中心点が1pxずれています',
    description: '回転アニメーションの中心が1px右にずれています',
    baseHTML: `
      <div class="rotation-container">
        <div class="rotating-square"></div>
      </div>
    `,
    modifiedHTML: `
      <div class="rotation-container">
        <div class="rotating-square"></div>
      </div>
    `,
    baseCSS: `
      .rotation-container {
        padding: 80px;
        background: #fafafa;
        display: flex;
        justify-content: center;
      }
      .rotating-square {
        width: 80px;
        height: 80px;
        background: #ff5722;
        animation: rotate 4s linear infinite;
      }
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,
    modifiedCSS: `
      .rotation-container {
        padding: 80px;
        background: #fafafa;
        display: flex;
        justify-content: center;
      }
      .rotating-square {
        width: 80px;
        height: 80px;
        background: #ff5722;
        animation: rotate 4s linear infinite;
        transform-origin: 41px 40px;
      }
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,
    answerArea: {
      x: 360,
      y: 80,
      width: 80,
      height: 80
    }
  },

  {
    id: 'animation-6',
    category: 'animation',
    title: 'トランジションのタイミング',
    hint: 'トランジションの遅延が0.01秒違います',
    description: 'ホバー時のトランジション遅延が0sではなく0.01sになっています',
    baseHTML: `
      <div class="transition-container">
        <div class="transition-box">
          Hover Me
        </div>
      </div>
    `,
    modifiedHTML: `
      <div class="transition-container">
        <div class="transition-box">
          Hover Me
        </div>
      </div>
    `,
    baseCSS: `
      .transition-container {
        padding: 60px;
        background: white;
        display: flex;
        justify-content: center;
      }
      .transition-box {
        padding: 30px 50px;
        background: #3f51b5;
        color: white;
        border-radius: 8px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.3s ease;
      }
      .transition-box:hover {
        transform: scale(1.1);
      }
    `,
    modifiedCSS: `
      .transition-container {
        padding: 60px;
        background: white;
        display: flex;
        justify-content: center;
      }
      .transition-box {
        padding: 30px 50px;
        background: #3f51b5;
        color: white;
        border-radius: 8px;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.3s ease 0.01s;
      }
      .transition-box:hover {
        transform: scale(1.1);
      }
    `,
    answerArea: {
      x: 280,
      y: 60,
      width: 240,
      height: 88
    }
  }
]