export default {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Resturant Name',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image of the Resturant',
            type: 'image',
        },
        {
            name: 'price',
            title: 'Price of the Dish in GBP',
            type: 'number',
        },
       
    ],
   
};