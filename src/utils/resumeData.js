import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import  Language  from "@material-ui/icons/Language";
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkIcon from '@material-ui/icons/Link';
import { WebOutlined } from "@material-ui/icons";




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
            description:'I have a been new to Web dev for 6 months',
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
            image:'https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.6435-9/213800256_4338680736171290_1840621317389864153_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeECGzjUSCKFIK_kzEJXX8ThrmYWCAMZZpOuZhYIAxlmkyl3H6OviaraOo06zy3jfMnvo9tZPa9DSuCyVy2FTUJe&_nc_ohc=SbHov11aJYEAX8eibOH&_nc_ht=scontent.fcrk1-1.fna&oh=2fde26afc3428a503f8097911b626e3b&oe=60E59D4B',
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
            image:'https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.6435-9/212168630_4338698859502811_215668733032714948_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGqyUq1IU7rJNMBRPGiFPN7RIhODjLYfiZEiE4OMth-Jg3yFpRrezFgpiR4iabk3WqgXDBj2WEkPzAZ4T3e3vRV&_nc_ohc=9dsbbARe6moAX-igUWd&_nc_ht=scontent.fcrk1-3.fna&oh=7856010eda72e842d9a7885e9007096f&oe=60E704C0',
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
            image:'https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.6435-9/205686623_4338709919501705_3283546145783425549_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFtodFAU3mSXnp4fqOV-YojYcy4IxAcVy1hzLgjEBxXLcR5mgZ6cKjPPVX8CYnsbRjZOrmL8oTsfmO1uiIghU2Y&_nc_ohc=sZt7w-2ZckgAX9nNaDQ&_nc_ht=scontent.fcrk1-1.fna&oh=cd76d2e07926d831b84c151aa27b7bb0&oe=60E5873D',
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
            image:'https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/211690097_4339449062761124_5621090959229935607_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGtWk7P-DqtBZwL62V6DSSS_WqWA0HFZ9_9apYDQcVn30cYkBFfUYQkcemNUDWOfBb12Ike-JdsbB-AV4_8ds0m&_nc_ohc=rFoTboBiYyYAX9jb1ow&_nc_ht=scontent.fmnl17-3.fna&oh=b5e397f7484a8f05721e8e237c21467b&oe=60E756CA',
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
            image:'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
            title:'Project 8',
            caption:'Short Description',
            description:'This is my project description please fill it in.',
            links:[
                {link:'http://google.com',icon: <YouTubeIcon />},
                {link:'https://github.com/migueljamin-dev',icon: <GithubIcon />},
                 {link:'#',icon: <Language />},

            ]
        },

        {
            tag:'NodeJs',
            image:'https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.6435-9/210249968_4339476859425011_8081777477655620494_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGl1QCyUs3kfvefPB6h8vvUweCxJqEKdAvB4LEmoQp0C77cm7hyAliec1vpqb3DPp1hrOy7Wib_6XRWXmtA2ISE&_nc_ohc=eQ7IDPeRIQIAX8K1YWy&_nc_ht=scontent.fcrk1-3.fna&oh=720b67b3ab46f090cd5a26d74d238286&oe=60E6105A',
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
            image:'../../assets/images/bg-portfolio.jpg',
            title:'Project 9',
            caption:'Short Description',
            description:'This is my project description please fill it in.',
            links:[
                {link:'http://google.com',icon: <YouTubeIcon />},
                {link:'http://google.com',icon: <GithubIcon />},
                {link:'http://google.com',icon: <Language />},

            ]
        }
    ]
}