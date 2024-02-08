import axios from 'axios';

let auth = {
    credentials: {
        login: 'londiks',
        password: 'testpass'
    },
    token: null
};

axios
    .post(
        'http://localhost/mektebeqebul.edu.az/rest/login',
        auth.credentials,
        {headers: {'Content-Type': 'application/json'}}
    )
    .then((response) => {
        if (response && response.data && response.data.success) {
            let i = response.data;
            console.log(i.message+' (user: '+i.data.user.login+')');
            auth.token = i.data.jwt_token;
        } else {
            throw {response: {status: '200', statusText: response.data.message}};
        }
        return Promise.resolve(response);
    })
    .then(res => {
        axios
            .get(
                'http://localhost/mektebeqebul.edu.az/rest/check-auth-token',
                {headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': auth.token,
                    'Authorization': 'Bearer '+auth.token
                }}
            )
            .then(res => {
                if (res && res.data && res.data.success) {
                    let i = res.data;
                    auth.user = i.data.user_info;
                    console.log(auth);
                } else {
                    throw {response: {status: '200', statusText: res.data.message}};
                }
            })
            .catch(err => {
                throw err;
            });
    })
    .catch(err => {
        console.log('Err:', err.response.status, err.response.statusText);
    });


/*
axios.post(
        utils.cfg('SERVER_URL')+'physics/units/convert/',
        {
            value: v,
            from: c+'.'+u,
            to: c+'.'+u2
        },
        {
            headers: {'Content-Type': 'application/json'}
        }
    )
    .then((response) => {
        let a = response.data;
        if (a && a.success) {
            this.setState({magnitude_to_result: a.data.result.value});
        } else {
            console.log('Fail: '+a.message);
            this.setState({
                unit_to_err: a.message
            });
        }
    })
    .catch((err) => {
        console.log(err);
        this.setState({
            unit_to_err: 'Unable to load units: '+err.message
        });
    });
*/