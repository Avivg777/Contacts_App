import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore/configureStore';
import ContactsPage from './components/ContactsPage';
import AddContactsPage from './components/AddContactsPage';
import EditContactsPage from './components/EditContactsPage';
import Header from './components/Header';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});

const jsx = (
    <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={ContactsPage} exact={true} />
                        <Route path="/Add_Contact" component={AddContactsPage} />
                        <Route path="/Edit_Contact/:id" component={EditContactsPage} />
                    </Switch>
                </div>
            </BrowserRouter>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));