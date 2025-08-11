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
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        gap: 20px;
        padding: 40px;
        background: #f0f0f0;
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
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 100px);
        gap: 20px;
        padding: 40px;
        background: #f0f0f0;
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
        background: #2c3e50;
      }
      .menu-item {
        padding: 15px 20px;
        margin-bottom: 10px;
        background: #34495e;
        color: white;
        cursor: pointer;
        transition: background 0.3s;
      }
      .menu-item:hover {
        background: #4a5f7a;
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
        background: #2c3e50;
      }
      .menu-item {
        padding: 15px 20px;
        margin-bottom: 10px;
        background: #34495e;
        color: white;
        cursor: pointer;
        transition: background 0.3s;
      }
      .menu-item:hover {
        background: #4a5f7a;
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
  }
]

// 残りの問題は後で追加（テキスト系、アイコン・画像系、ボタン系、背景系、シャドウ系、レスポンシブ系、アニメーション系）