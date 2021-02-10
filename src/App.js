import React, {Component} from 'react';
import Layout from './Containers/Layout/Layout';
import Section from "./Containers/Section/Section";
import Intro from './Components/Intro/Intro';
import Title from "./Components/Title/Title";

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Section>
                        <Intro/>
                            <Title>Web</Title>
                    </Section>
                </Layout>
            </div>
        );
    }
}

export default App;
