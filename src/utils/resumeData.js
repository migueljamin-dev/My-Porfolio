import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import { WebOutlined } from "@material-ui/icons";

export default {
    name:'Miguel Jamin',
    title:'Front-End developer',

    birthday: 'July 13, 1996',
    email:'migueljamin12@gmail.com',
    address: 'Batasan, Quezon City',
    phone: '09095754270',

    social:{
        Facebook:{
            link: "https://www.facebook.com",
            text: 'Migz Coding',
            icon:<FacebookIcon />,
        },
        LinkedIn:{
            link: "https://www.facebook.com",
            text: 'My LinkedIn',
            icon:<LinkedInIcon />,
        },
        Github:{
            link: "https://www.facebook.com",
            text: 'My Github',
            icon:<GithubIcon />,
        },
    },

    about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an \n\n unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,

    experince: [
        {
     title:'Mapping Assistant',
     date:'2017-2020',
     description:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web`
     }
    ],

    education: [
        {
        title:'Access Computer College',
        date:'2012-2016',
        description:'Bachelor of Information Technology'
     },
     {
        title:'Batasan Hills National High School',
        date:'2008-2012',
        description:'Bachelor of Information Technology'
     },
     {
        title:'Access Computer College',
        date:'2002-2008',
        description:'Bachelor of Information Technology'
     }
    ],

    services: [
        {
            title:'Web Development',
            description:'I have a been new to Web dev for 6 months',
            icon:<WebOutlined />
        },
        {
            title:'Web Dev',
            description:'I have a been new to Web dev for 6 months',
            icon:<WebOutlined />
        },
        {
            title:'Web Dev',
            description:'I have a been new to Web dev for 6 months',
            icon:<WebOutlined />
        },
    ],

    skills: [
        {
            title:'FRONT-END' ,description:['ReactJs','Bootstrap','Javascript']
        },
        {
            title:'BACK-END' ,description:['PHP']
        },
        {
            title:'DATABASE' ,description:['MySql']
        },
        {
            title:'SOURCE CONTROL' ,description:['Git','GitHub']
        },
    ],

}