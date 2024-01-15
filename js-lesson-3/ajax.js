fetch('http://localhost/mektebeqebul.edu.az/rest/login')
    .then((res) => {
        console.log(res);
        if (res.status.toString().charAt(0)===2) {
            return Promise.resolve(res);
        } else {
            return Promise.reject(res);
        }
    })
    .then((res) => {
        console.log('URA');
    })
    .catch((err) => {
        let msg = err.status+': '+err.statusText;
        console.log(msg);
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