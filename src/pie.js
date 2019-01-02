class Pie {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.cost = data.cost;
    this.description = data.description;
    this.image_url = data.image_url
    Pie.all.push(this)
  }

renderListItem() {
  return `
  <li>
  <h3>${this.name}</h3>
  <center><img src="${this.image_url}" alt=""></center>
  <h5>${this.description}</h5>
  <button data-id=${this.id}>Place Order</button>
  <button data-id=${this.id}>Comment</button>
</li>`
  }
}

Pie.all = [];
