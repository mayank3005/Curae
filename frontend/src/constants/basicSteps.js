// let basicSteps = [
//     {
//         id: '1',
//         message: 'Hello my friend, please tell me your name?',
//         trigger: '2',
//     },
//     {
//         id: '2',
//         user: true,
//         trigger: '3'
//     },
//     {
//         id: '3',
//         message: 'Please select your profession?',
//         trigger: '4'
//     },
//     {
//         id: '4',
//         options: [
//             { value: 'engineer', label: 'Engineer', trigger: '5' },
//             { value: 'doctor', label: 'Doctor', trigger: '5' },
//             { value: 'selfEmployed', label: 'Self Employed', trigger: '5' }
//         ],
//     },
//     {
//         id: '5',
//         message: 'That\'s Good!!',
//         end: true
//     }
// ]

let basicSteps = [
    {
        id: '1',
        message: 'Hola !!',
        trigger: '2',
    },
    {
        id: '2',
        message: 'What is your name?',
        trigger: '3',
    },
    {
        id: '3',
        user: true,
        trigger: '4',
    },
    {
        id: '4',
        message: 'Hi {previousValue}, nice to meet you!',
        trigger: '5',
    },
    {
        id: '5',
        message: 'Do you have a medical issue ?',
        trigger: '6'
    },
    {
        id: '6',
        options: [
            { value: 'yes', label: 'Yes', trigger: '7' },
            { value: 'no', label: 'No', trigger: '9' }
        ],
    },
    {
        id: '7',
        message: 'You can contact this doctor : Mr. Ramesh [+91 1234567890]',
        trigger: '9'
    },
    {
        id: '9',
        message: 'Take care',
        trigger: '10'
    },
    {
        id: '10',
        message: 'Byee',
        end: true
    }
]

export default basicSteps