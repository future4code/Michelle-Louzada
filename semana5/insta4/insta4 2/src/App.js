import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Michelle'}
          fotoUsuario={'https://scontent.ffln3-1.fna.fbcdn.net/v/t1.0-9/104971829_3134521153278904_8925511664708256776_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeEn8OR_rpvVrdkJ_GgOSJ4kb7oTESOgGTFvuhMRI6AZMY-JfdtKQbgTbq_xf4ILT83ANxflakAcuYcwRRuLO3Tr&_nc_ohc=3hOKYHitx3MAX_B3DLm&_nc_oc=AQkg_yGuiuJkI5lPZswV9BgzuSaVVRWNl7jUtZaIJ93wCN0dRHZJ0fpIfE3z6YWxKoHVPIyuCGsgNsuBYdN7Or4B&_nc_ht=scontent.ffln3-1.fna&oh=5c0895aac06064125cb8974c8c113c39&oe=5F5A6B28'}
          fotoPost={'https://img.quizur.com/f/img5ccef3aef2c7b8.56973787.jpeg?lastEdited=1557066675'}
        />
        <Post
        nomeUsuario={'Claudia'}
        fotoUsuario={'https://scontent.ffln3-1.fna.fbcdn.net/v/t1.0-9/102328599_1451343465052457_4727528557780140032_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeEqfQk9HWcewtRjrYp1LLKGTOUd02tjmLNM5R3Ta2OYsx1LaVVUQ_qMEgEXZNZ4oxGDYp0Cwqf36FstcT1VqHd0&_nc_ohc=fM16jRYfFzYAX_Y3kcW&_nc_oc=AQlC6yaqcJHx249XMZ5DshotMyTOcTqVKizJIEVjg7K_J1tSZPL37YbUBpEOhVYi6TdIS0yAffJfu2gJtPjaoJEk&_nc_ht=scontent.ffln3-1.fna&oh=8688b0c00525ef86646dd8df3c62de5a&oe=5F58B3F1'}
        fotoPost={'https://pm1.narvii.com/6840/34187d2dac55101311f9b7191cad5ba32043abeev2_00.jpg'}
      />
      </div>
    );
  }
}

export default App;
