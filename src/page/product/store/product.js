
const spec = {
  power: '15W',
  rotate: '1460转/分',
  produce: '220-260kg/h',
  weight: '500KG',
  pair: '6~10对',
  sum: '依配置而定'
}
let id = 1;

const fsj145 = [
  {
    pic: '/pic/product/fsj145/1.jpg',
    title: 'JN-A型',
    spec,
  },
  {
    pic: '/pic/product/fsj145/2.jpg',
    title: '出粉机',
    spec,
  },
  {
    pic: '/pic/product/fsj145/3.jpg',
    title: 'JN-A型粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj145/4.jpg',
    title: 'JN-A型粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj145/5.jpg',
    title: '节能粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj145/6.jpg',
    title: 'JN-A型粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj145/7.jpg',
    title: 'JN-A型链条机',
    spec,
  },
]

const fsj160 = [
  {
    pic: '/pic/product/fsj160/1.jpg',
    title: 'RF-160A型粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj160/2.jpg',
    title: 'RF-160A型粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj160/3.jpg',
    title: 'RF-160A型粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj160/4.jpg',
    title: 'RF-160A型侧喂料粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj160/5.jpg',
    title: 'RF-160粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj160/6.jpg',
    title: '160型粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj160/7.jpg',
    title: 'RF-160型粉丝机',
    spec,
  },
]

const fsj165 = [
  {
    pic: '/pic/product/fsj165/1.jpg',
    title: 'RF-165型（横式自动送料机）',
    spec,
  },
  {
    pic: '/pic/product/fsj165/2.jpg',
    title: 'RF-165I型（立式自动进料）',
    spec,
  },
  {
    pic: '/pic/product/fsj165/3.jpg',
    title: 'RF-165II型（立式虾片机）',
    spec,
  },
  {
    pic: '/pic/product/fsj165/4.jpg',
    title: '165型粉丝机',
    spec,
  },
]

const fsj180 = [
  {
    pic: '/pic/product/fsj180/1.jpg',
    title: 'RF-180型粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj180/2.jpg',
    title: '直口粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj180/3.jpg',
    title: '粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj180/4.jpg',
    title: 'RF-180粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj180/5.jpg',
    title: 'RF-180粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj180/6.jpg',
    title: 'RF-180粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj180/7.jpg',
    title: '180型直口粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj180/8.jpg',
    title: 'RF-180型（侧面自动进料机）',
    spec,
  },
]

const fsj187 = [
  {
    pic: '/pic/product/fsj187/1.jpg',
    title: 'RF-187新型粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj187/2.jpg',
    title: '187新型粉丝',
    spec,
  },
  {
    pic: '/pic/product/fsj187/3.jpg',
    title: 'RF-187粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj187/4.jpg',
    title: 'RF-187粉丝机',
    spec,
  },
  {
    pic: '/pic/product/fsj187/5.jpg',
    title: '187型粉丝机',
    spec,
  },
]

const blj = [
  {
    pic: '/pic/product/blj/1.jpg',
    title: 'RF-200',
    spec,
  },
  {
    pic: '/pic/product/blj/2.jpg',
    title: 'RF-100 搅拌机',
    spec,
  },
  {
    pic: '/pic/product/blj/3.jpg',
    title: '圆型搅拌机',
    spec,
  },
  {
    pic: '/pic/product/blj/4.jpg',
    title: 'RF-100搅拌机',
    spec,
  },
  {
    pic: '/pic/product/blj/5.jpg',
    title: 'RF-200圆形搅拌机',
    spec,
  },
  {
    pic: '/pic/product/blj/5.jpg',
    title: 'RF-100拌料机',
    spec,
  },
]

const shj = [
  {
    pic: '/pic/product/shj/1.jpg',
    title: 'RF-800蒸熟机',
    spec,
  },
  {
    pic: '/pic/product/shj/2.jpg',
    title: 'RF-06型（熟化机）',
    spec,
  },
  {
    pic: '/pic/product/shj/3.jpg',
    title: 'RF-02型熟化机',
    spec,
  },
]

const csj = [
  {
    pic: '/pic/product/csj/1.jpg',
    title: '松粉机',
    spec,
  },
  {
    pic: '/pic/product/csj/2.jpg',
    title: '搓丝机',
    spec,
  },
  {
    pic: '/pic/product/csj/3.jpg',
    title: '自动搓丝机',
    spec,
  },
]

const fsj = [
  {
    pic: '/pic/product/fsj/1.jpg',
    title: '粉碎机',
    spec,
  },
]

const fj = [
  {
    pic: '/pic/product/fj/1.jpg',
    title: '粉镜',
    spec,
  },
  {
    pic: '/pic/product/fj/2.jpg',
    title: '转能叶片',
    spec,
  },
  {
    pic: '/pic/product/fj/3.jpg',
    title: '螺旋件',
    spec,
  },
]

class ProductStore {

  constructor() {
    this._products = [];

    this._insert('fsj145', fsj145);
    this._insert('fsj160', fsj160);
    this._insert('fsj165', fsj165);
    this._insert('fsj180', fsj180);
    this._insert('fsj187', fsj187);
    this._insert('blj', blj);
    this._insert('shj', shj);
    this._insert('csj', csj);
    this._insert('fsj', fsj);
    this._insert('fj', fj);
  }

  _insert(category, data) {
    for (const d of data) {
      this._products.push({
        id: id++,
        category,
        ...d,
      })
    }
  }

  getNextProduct(productId) {
    const idx = this._products.findIndex(product => product.id === productId);

    if (idx >= this._products.length - 1) {
      return this._products[0];
    }

    return this._products[idx + 1];
  }

  getPrevProduct(productId) {
    const idx = this._products.findIndex(product => product.id === productId);

    if (idx <= 0) {
      return this._products[this._products.length - 1];
    }

    return this._products[idx - 1];
  }


  getAllProducts() {
    return this._products;
  }

  getRecommendProducts() {
    const products = [];

    while( products.length < 4) {
      var idx = Math.floor(Math.random() * this._products.length);
      if (products.findIndex(product => product.id === this._products[idx].id) >= 0) {
        continue;
      }

      products.push(this._products[idx]);
    }

    return products;
  }

  getProductsByCategory(category) {
    return this._products.filter(product => product.category === category);
  }

  getProductByCategoryAndId(category, id) {
    const products = this.getProductsByCategory(category);
    const selectedProducts = products.filter(product => product.id === id);

    return selectedProducts.length > 0 ? selectedProducts[0] : null;
  }
}

const productStore = new ProductStore();

export default productStore;