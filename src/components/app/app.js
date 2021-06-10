import React, { Component } from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import Main from "../../layout/main/main";

export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}