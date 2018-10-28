import React from 'react';

const links = [
    'https://www.fantasticman.com/',
    'https://www.illgander.com/',
    'http://airship.nyc',
    'http://www.benw.de/',
    'http://www.nosajthing.com/',
    'http://mallmic.tumblr.com/',
    'https://sam-ob.com/',
    'https://jacquesgreene.com/',
    'http://kaytrakaytra.tumblr.com/',
    'https://www.victoriamouraphoto.com/',
    'http://hudsonmohawke.com/',
    'http://www.bendesilva.com/',
    'http://www.artofflightmovie.com/',
    'https://www.balenciaga.com/us',
    'https://www.chrisburkard.com/',
    'https://www.cavempt.com/',
    'https://sikkema.be/',
    'https://erik-joergensen.com/en/',
    'https://www.blimp.gr/',
    'http://toosoon.paris/'
];

export class iLike extends React.Component {
    render () {
        return (
            <div className="iLike">
                <ul>
                {links.map(link => {
                    return <li key={link}><a href={link} target="_blank">{link}</a></li>})
                }
                </ul>
            </div>
        );
    }
}