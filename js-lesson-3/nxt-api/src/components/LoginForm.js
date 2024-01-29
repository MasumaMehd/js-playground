export default function LoginForm({cmsName}) {
	let doAuth = function() {
		console.log(doAuth);
	};
    return (<div>
		<span>Welcome to {cmsName.domain}</span>
		<input name="username" style={{boxShadow: '4px 4px 4px rgba(0,0,0,0.5)'}} onChage={doAuth} />
	</div>);
};