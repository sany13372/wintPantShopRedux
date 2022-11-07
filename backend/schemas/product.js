export default {
   name: 'product',
   type: 'document',
   title: 'Product',
   fields: [
      {
         name: 'name',
         title: 'Name',
         type: 'string',
      },
      {
         name: 'image',
         title: 'Image',
         type: 'array',
         of: [{ type: 'image' }],
         options: {
            hotspot: true
         }
      },
      {
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
            source: 'name',
            maxLength: 90
         }
      },
      {
         name: 'price',
         title: 'Price',
         type: 'number',
      },
      {
         name: 'size',
         title: 'Size',
         type: 'array',
         of: [{
            type: 'string'
         }]
      },
      {
         name: 'category',
         title: 'Category',
         type: 'string',
      },
      {
         name: 'details',
         title: 'Details',
         type: 'string',
      },
      {
         name: 'sostav',
         title: 'Sostav',
         type: 'string',
      },
      {
         name: 'country',
         title: 'Country',
         type: 'string',
      },
      {
         name: 'naznachenie',
         title: 'Naznachenie',
         type: 'string',
      },
      {
         name: 'uhod',
         title: 'Uhod',
         type: 'string',
      },
      {
         name: 'gender',
         title: 'Gender',
         type: 'string',
      },
      {
         name: 'colors',
         title: 'Colors',
         type: 'array',
         of: [{
            name: 'color',
            title: 'Color',
            type: 'string',
         }]
      },
   ]
}