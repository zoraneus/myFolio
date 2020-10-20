import React from 'react';
import {Baneer} from '../Components/BaneerSection';
import {
  TechnoCard,
  TechnoSection,
  ReactIcon,
  BootstrapIcon,
  DockerIcon,
  NodeIcon,
  PhpIcon,
  RailsIcon,
  SailsIcon,
  WordpressIcon
} from '../Components/TechnoSection';
import {
  ClientSection,
  ArgosoftLogo,
  BoyerLogo,
  GoogleLogo,
  GpgLogo,
  TakerLogo
} from '../Components/ClientSection';
import {Timeline} from '../Components/TimelineSection';

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
        <img src={BootstrapIcon} />
        <h3>Bootstrap 4</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={DockerIcon} />
        <h3>Docker</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={NodeIcon} />
        <h3>Nodejs</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={PhpIcon} />
        <h3>PHP 7</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={RailsIcon} />
        <h3>Ruby on Rails</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={SailsIcon} />
        <h3>Sails.js</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={WordpressIcon} />
        <h3>Wordpress</h3>
        <p>Les PWA permettent à vos sites web de proposer des fonctionnalités offline tout en garantissant une performance irréprochable.</p>
      </TechnoCard>
    </TechnoSection>
    <ClientSection>
      <img src={TakerLogo} />
      <img src={ArgosoftLogo} />
      <img src={BoyerLogo} />
      <img src={GoogleLogo} />
      <img src={GpgLogo} />
    </ClientSection>
    <Timeline>
    </Timeline>
  </div>
)

export default HomePage