import React from 'react';
import Layout from '../Layout/Layout';
import members from '../database/teamMember.json'
import SingleTeam from '../components/Team/SingleTeam';

const Team = () => {
    return (
        <Layout>
            <div className='container mx-auto'>
                <h1 className='text-xl font-bold py-5 text-orange-500'>OUR TEAM MEMBER</h1>
                <p className='text-2xl w-[60%] pb-5'>Check our awesome team members</p>
            </div>

            <div className='grid grid-cols-12'>
                {
                    members.map((member, i) => <SingleTeam key={i} member={member} />)
                }
            </div>
        </Layout>
    );
};

export default Team;