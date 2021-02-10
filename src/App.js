import React, {Component} from 'react';
import Layout from './Containers/Layout/Layout';
import Section from "./Containers/Section/Section";
import Intro from './Components/Intro/Intro';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Section>
                        <Intro/>
                    </Section>
                </Layout>
            </div>
        );
    }
}

export default App;
