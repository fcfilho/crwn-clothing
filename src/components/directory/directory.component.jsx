import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

// Directory é o topo dos componentes (DOM) por iss é classe 
// e vai ser referenciado no app.js
// each item-menu é uma seção
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                { 
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 1
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 1
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 1
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 1
                }]
        }
    }
    
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, title, imageUrl, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        );
    }
}

export default Directory;