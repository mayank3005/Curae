let basicSteps = [
    {
        id: '1',
        message: 'Hi there! Welcome to our healthcare website.',
        trigger: '2',
    },
    {
        id: '2',
        message: 'What can we help you with today?',
        trigger: '3',
    },
    {
        id: '3',
        options: [
            { value: 'services', label: 'Services we offer', trigger: '4' },
            { value: 'insurance', label: 'Insurance coverage', trigger: '5' },
            { value: 'cost', label: 'Cost of services', trigger: '6' },
            { value: 'doctors', label: 'Our doctors', trigger: '7' }
        ],
    },
    {
        id: '4',
        message: 'We offer a wide range of healthcare services, including primary care, specialty care, and diagnostic testing.',
        trigger: '8',
    },
    {
        id: '5',
        message: 'Yes, we accept most major insurance plans. Please bring your insurance card with you to your appointment.',
        trigger: '8',
    },
    {
        id: '6',
        message: 'Please contact our customer service for pricing information.',
        trigger: '8',
    },
    {
        id: '7',
        message: 'Our doctors are highly experienced and specialized in various fields. You can find more information about them on our website.',
        trigger: '8',
    },
    {
        id: '8',
        message: 'Is there anything else you would like to know?',
        trigger: '9',
    },
    {
        id: '9',
        options: [
            { value: 'yes', label: 'Yes', trigger: '2' },
            { value: 'no', label: 'No', trigger: '10' }
        ],
    },
    {
        id: '10',
        message: 'Thank you for visiting our website. We hope to see you soon!',
        end: true
    }
];

export default basicSteps;
