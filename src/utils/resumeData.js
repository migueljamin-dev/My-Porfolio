import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import  Language  from "@material-ui/icons/Language";
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkIcon from '@material-ui/icons/Link';
import { WebOutlined } from "@material-ui/icons";

// pictures
import student_info from '../assets/images/student_info.png'
import CI from '../assets/images/CI.jpg'
import crudnodeejs from '../assets/images/crudnodeejs.png'
import htmlCSS from '../assets/images/htmlCSS.jpg'
import real_state from '../assets/images/real_state.png'
import NodeSocket from '../assets/images/NodeSocket.jpg'
import ReactApi from '../assets/images/ReactAPI.jpg'
import Boostrap from '../assets/images/Boostrap.jpg'




export default {
    name:'Miguel Jamin',
    title:'Self Sufficient Developer',

    birthday: 'July 13, 1996',
    email:'migueljamin12@gmail.com',
    address: 'Batasan, Quezon City',
    phone: '09095754270',

    social:{
        Facebook:{
            link: "https://www.facebook.com",
            text: 'Miguel Jamin',
            icon:<FacebookIcon />,
        },
        LinkedIn:{
            link: "https://www.linkedin.com/in/miguel-jamin-9242611ba/",
            text: 'My LinkedIn',
            icon:<LinkedInIcon />,
        },
        Github:{
            link: "https://github.com/migueljamin-dev",
            text: 'My Github',
            icon:<GithubIcon />,
        },
    },

    about: `I'm a recent graduate of Village88 has incubated Coding Dojo, a coding school that teaches 3 Full stacks
            3 months, I'm capable of learning new techonologies very quickly, and am always looking for opportunities to further
            expand my skills and grow as a developer`,

    experince: [
        {
            title:'Web Developer Trainee',
            date:'March 8,2021 to June 8, 2021',
            description:`Village88 helps me became self sufficient programmer that
            teaches 3 full stacks in 3 months 1st month HTML CSS Jquery 2nd month Php Codeigniter 
            Ajax Myql 3rd
             Node.js Express Socket.io`
        },
        {
            title:'Mapping Assistant',
            date:'2017-2020',
            description:`Monitor mapping work or the updating of maps to ensure accuracy, the inclusion of new or changed information, or compliance with rules and regulations.
            Determine scales, line sizes, or colors to be used for hard copies of computerized maps, using plotters`
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
        description:''
     },
     {
        title:'Commonwealth Elementary School',
        date:'2002-2008',
        description:''
     }
    ],

    services: [
        {
            title:'Web Development',
            description:'I have a been new to Web dev for 3 months',
            icon:<WebOutlined />
        },
        {
            title:'Clean Code',
            description:'In my training teach me always use clean code',
            icon:<WebOutlined />
        },
        {
            title:'Comming Soon',
            description:'',
            icon:<WebOutlined />
        },
    ],

    skills: [
        {
            title:'FRONT-END' ,description:['HTML','CSS','ReactJs','Bootstrap','Javascript','Jquery']
        },
        {
            title:'BACK-END' ,description:['PHP','NodeJs','Express','Socket.io']
        },
        {
            title:'DATABASE' ,description:['MySql']
        },
        {
            title:'SOURCE CONTROL' ,description:['Git','GitHub']
        },
    ],


    projects:[
        {
            tag:'HTML/CSS',
            image:htmlCSS,
            title:'Exam in Village88',
            caption:'Pure HTML CSS',
            description:'This is 4 hours Clone sample website',
            links:[
                {link:'https://www.youtube.com/watch?v=656vJDI9HP8',icon: <YouTubeIcon />},
                {link:'https://github.com/migueljamin-dev',icon: <GithubIcon />},
                {link:'#',icon: <Language />},

            ]
        },

        {
            tag:'HTML/CSS',
            image:Boostrap,
            title:'Boostrap',
            caption:'HTML CSS Boostrap',
            description:'Boostrap that take in coursera',
            links:[
                {link:'https://quizzical-haibt-8d0a91.netlify.app/',icon: <LinkIcon />},
                {link:'https://github.com/migueljamin-dev',icon: <GithubIcon />},
                {link:'#',icon: <Language />},

            ]
        },

        {
            tag:'HTML/CSS',
            image:real_state,
            title:'Real State',
            caption:'HTML CSS Javascript',
            description:'',
            links:[
                {link:'https://gracious-lovelace-31e359.netlify.app/',icon: <LinkIcon />},
                {link:'https://github.com/migueljamin-dev',icon: <GithubIcon />},
                 {link:'https://gracious-lovelace-31e359.netlify.app/',icon: <Language />},

            ]
        },

        {
            tag:'React',
            image:ReactApi,
            title:'API Reciept',
            caption:'Api fetching',
            description:'React Fetching data and can search you want to cook',
            links:[
                {link:'https://kind-mestorf-7452f3.netlify.app/',icon: <LinkIcon />},
                {link:'https://github.com/migueljamin-dev',icon: <GithubIcon />},
                 {link:'https://gracious-lovelace-31e359.netlify.app/',icon: <Language />},

            ]
        },

        {
            tag:'CodeIgniter',
            image:CI,
            title:'Part 2 Exam in village88',
            caption:'CodeIgniter Register Login ',
            description:'This is exam need to finish in 8hrs with prevent SQL injection and XSS ',
            links:[
                {link:'https://www.youtube.com/watch?v=8Q3ukow842A&feature=youtu.be',icon: <YouTubeIcon />},
                {link:'https://github.com/migueljamin-dev',icon: <GithubIcon />},
                 {link:'#',icon: <Language />},

            ]
        },

        {
            tag:'CodeIgniter',
            image:student_info,
            title:'Simple Student Information',
            caption:'Codeigniter',
            description:'This is my Simple Student Information that create from the scratch to practice codeigniter you can watch link below',
            links:[
                {link:'https://www.youtube.com/watch?v=6uBdp_ZxU0Q',icon: <YouTubeIcon />},
                {link:'https://github.com/migueljamin-dev/Simple-Student-Information',icon: <GithubIcon />},
                 {link:'#',icon: <Language />},

            ]
        },

        {
            tag:'NodeJs',
            image:NodeSocket,
            title:'Part 3 Exam in village88',
            caption:'NodeJs Express Socket.io',
            description:'This is you can play with other browser or other pc can play draw circle ',
            links:[
                {link:'https://www.youtube.com/watch?v=qp-sbsIi-QY',icon: <YouTubeIcon />},
                {link:'https://github.com/migueljamin-dev',icon: <GithubIcon />},
                 {link:'#',icon: <Language />},

            ]
        },

        
        {
            tag:'NodeJs',
            image:crudnodeejs,
            title:'Nodejs Express MongoDB',
            caption:'Simple Crud',
            description:'to practice to use mongoDB and not yet deploy you can watch link below',
            links:[
                {link:'https://www.youtube.com/watch?v=OtmiG4XjAEQ',icon: <YouTubeIcon />},
                {link:'https://github.com/migueljamin-dev/CRUD-Nodejs-mongodb',icon: <GithubIcon />},
                {link:'http://google.com',icon: <Language />},

            ]
        }
    ]
}