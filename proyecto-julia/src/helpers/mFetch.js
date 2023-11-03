const products = [
    {id:1,"title": "HONEYMOON", "artist": 'Lana del Rey',"price": 1200, imageUrl: 'https://plasticstone.net/cdn/shop/products/LanaDelRey-Honeymoon2xLP_BlackVinyl_1024x1024@2x.jpg?v=1656503893', category: 'Vinilos'},
    {id:2,"title": "A.M","artist": 'Arctic Monkeys',"price": 1300, imageUrl: 'https://lamerch.pe/cdn/shop/products/ArcticMonkeys-AM_Vinilo_923c4dae-c8d5-475d-ba37-8d774615b657_1200x1200_crop_center.jpg?v=1678926020', category: 'Vinilos'},
    //{id:3,"title": "HORSES","artist": 'Patti Smith',"price": 1400, imageUrl: 'https://www.rockandpop.cl/wp-content/uploads/2018/04/88875111731-Patti-Smith-Horses_800x800_4a7f07b5-af08-4481-980b-fcd5790edc1a_grande.jpg', category: 'Vinilos'},
    {id:3,"title": "GREEN","artist": 'R.E.M',"price": 1450, imageUrl: 'https://sound-merch.com.au/cdn/shop/products/REM-green_1024x1024.png?v=1622511805', category: 'Vinilos'},
    //{id:5,"title": "CLOSER","artist": 'Joy Division',"price": 500, imageUrl: 'https://www.efeeme.com/wp-content/uploads/2020/07/joy-division-closer-18-07-20.jpg', category: 'CDS'},
    //{id:6,"title": "THE WALL","artist": 'Pink Floyd',"price": 550, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/The_Wall_Cover.svg', category: 'CDS'},
    {id:4,"title": "LOADED","artist": 'The Velvet Underground',"price": 450, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/71/Loadedalbum.jpg', category: 'CDS'},
    {id:5,"title": "TRANSFORMER","artist": 'Lou Reed',"price": 400, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Loureedtransformer.jpeg', category: 'CDS'}
]
export const mFetch = () =>{
    return new Promise ((res)=>{
       setTimeout(()=>{
        res(products)
       }, 1000)
    }) 
}