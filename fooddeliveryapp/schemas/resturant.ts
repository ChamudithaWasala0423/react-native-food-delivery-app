export default {
    name: 'resturant',
    title: 'Resturant',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Resturant Name',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short Description',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the Resturant',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'lat',
            type: 'number',
            title: 'Latitude of the Restaurent',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'long',
            type: 'number',
            title: 'Latitude of the Restaurent',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'address',
            type: 'string',
            title: 'Resturant Address',
            validation: (Rule: { required: () => any; }) => Rule.required(),
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Enter rating from (1-5 Starts)',
            validation: (Rule: { required: () => any; }) => Rule.required().min(1) .max(5) .error("Please enter a value between 1 and 5"),
        },
        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes of the Resturant',
           of: [{ type: 'reference', to: [{ type: 'dish' }] }]
        },
        { 
            name: 'type',
            type: 'reference',
            title: 'Category of Resturant',
            to: [{ type: 'category' }],
        },
    ],
   
};



  
           