const baseUrl = "http://localhost:3000/api/v1/"
const piesUrl = `${baseUrl}pies`
const ordersUrl = `${baseUrl}orders`
const usersUrl = `${baseUrl}users`

document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/api/v1/pies';
  fetch(endPoint)
    .then(res => res.json())
    .then(json =>
      json.forEach(pie => {
        const newPie = new Pie(pie);
        document.querySelector('#pie-list').innerHTML += newPie.renderListItem();
      }));
    });







        // const markup = `
        // <li>
        //   <h3>${pie.name}</h3>
        //   <center><img src="${pie.image_url}" alt=""></center>
        //   <h5>${pie.description}</h5>
        //   <button data-id=${this.id}>Place Order</button>
        //   <button data-id=${this.id}>Comment</button>
        // </li>`;
        //
        // document.querySelector('#pie-list').innerHTML += markup;
        //       })
        //     );
        // });
