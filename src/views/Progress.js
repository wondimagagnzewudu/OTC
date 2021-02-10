import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import TopImageContainer from '../components/otc/modal'
import Typography from '@material-ui/core/Typography';
import FloatingActionButtons from '../components/otc/floating'


const Progress = () => {

    return (
        <>
            {/* <FloatingActionButtons /> */}
            <TopImageContainer />
            <div>
                <Typography style={{ textAlign: 'center', fontSize: 50 }}>Oromia Tourism Commission</Typography>
                <Typography style={{ textAlign: 'center', fontSize: 50 }}> Website is on progress</Typography>
            </div>

        </>
    );
}

export default Progress;