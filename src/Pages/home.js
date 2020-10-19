import React from 'react';
import {Baneer} from '../Components/BaneerSection';
import {TechnoCard, ReactIcon, TechnoSection} from '../Components/TechnoSection';

const HomePage = () => (
  <div>
    <Baneer>
      <h1>Guilian Ganster</h1>
      <p>Etudiant Epitech 3e année (Master MSC 5 ans) et développeur freelance fullstack depuis 1 ans. Je cherche un contrat professionnel 3j/semaine de janvier jusqu’à août 2021 à Rennes,  (renouvelable sur 2 ans).</p>
    </Baneer>
    <TechnoSection>
      <TechnoCard>
        <img src={ReactIcon} />
        <h3>React</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={ReactIcon} />
        <h3>React</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={ReactIcon} />
        <h3>React</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={ReactIcon} />
        <h3>React</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={ReactIcon} />
        <h3>React</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
    </TechnoSection>
  </div>
)

export default HomePage