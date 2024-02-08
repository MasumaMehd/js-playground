import LoginForm from '@/components/LoginForm'

export default function Converter() {
    return <LoginForm cmsName={{domain: "profit.az", title: "Professional IT"}} />;
	//let metadata = {name: "Masuma", surname: "Mehdiyeva"};
    //return <LoginForm cmsName={metadata} />;
    //return <LoginForm cmsName={{name: "Masuma", surname: "Mehdiyeva"}} />;
	//let classes = ['box', 'button', 'disabled']
    //return <LoginForm cmsName={classes.map((v) => {return 'bootstrap-'+v;}).join()} />;
};