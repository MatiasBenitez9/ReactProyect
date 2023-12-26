const productosIndumentaria = [
    {
      id: "9",
      nombre: "Vestido Verano Floral",
      descripcion: "Vestido fresco para el verano",
      stock: 15,
      precio: 2500,
      imagen: "/img/vestido-verano-floral.webp",
      categoria: "mujer"
    },
    {
      id: "10",
      nombre: "Camisa de Vestir Slim Fit",
      descripcion: "Camisa elegante para hombre",
      stock: 20,
      precio: 1800,
      imagen: "/img/camisa-vestir-slim-fit.webp",
      categoria: "hombre"
    },
    {
      id: "11",
      nombre: "Jean Skinny Fit",
      descripcion: "Jean ajustado para mujer",
      stock: 18,
      precio: 2800,
      imagen: "/img/jean-skinny-fit.webp",
      categoria: "mujer"
    },
    {
      id: "12",
      nombre: "Saco Elegante para Hombre",
      descripcion: "Saco formal para hombre",
      stock: 12,
      precio: 4500,
      imagen: "/img/saco-elegante-hombre.webp",
      categoria: "hombre"
    },
    {
      id: "13",
      nombre: "Blusa Estampada",
      descripcion: "Blusa ligera y elegante",
      stock: 25,
      precio: 1900,
      imagen: "/img/blusa-estampada.webp",
      categoria: "mujer"
    },
    {
      id: "14",
      nombre: "Pantalón Culotte",
      descripcion: "Pantalón de moda para mujer",
      stock: 30,
      precio: 3200,
      imagen: "/img/pantalon-culotte.webp",
      categoria: "mujer"
    },
    {
      id: "15",
      nombre: "Vestido de Noche Elegante",
      descripcion: "Vestido para ocasiones especiales",
      stock: 10,
      precio: 5500,
      imagen: "/img/vestido-noche-elegante.webp",
      categoria: "mujer"
    },
    {
      id: "16",
      nombre: "Camisa Cuadros",
      descripcion: "Camisa casual para hombre",
      stock: 22,
      precio: 2100,
      imagen: "/img/camisa-cuadros.webp",
      categoria: "hombre"
    },
    {
      id: "17",
      nombre: "Shorts Deportivos",
      descripcion: "Shorts para actividades físicas",
      stock: 28,
      precio: 1500,
      imagen: "/img/shorts-deportivos.webp",
      categoria: "hombre"
    },
    {
      id: "18",
      nombre: "Blazer Elegante Mujer",
      descripcion: "Blazer para mujer",
      stock: 14,
      precio: 4800,
      imagen: "/img/blazer-elegante-mujer.webp",
      categoria: "mujer"
    }
  ];
  
  const obtenerProductos = new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout(() => {
      resolve(productosIndumentaria);
    }, 2000);
  });
  
  export default obtenerProductos