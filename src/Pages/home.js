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
  TakerLogo,
  AtlanticLogo
} from '../Components/ClientSection';
import {Timeline} from '../Components/TimelineSection';
import {
  ProjectCard, 
  ProjectSection, 
  GpgExtranet,
  Milleparty,
  Projipac,
  GpgCrm
} from '../Components/ProjectSection';
import {ContactForm} from '../Components/contactForm';
import {Element} from 'react-scroll'

const HomePage = () => (
  <div>
    <Baneer>
      <h1>Guilian Ganster</h1>
      <p>Développeur full stack
      freelance avec 1 ans
      d’expérience. Passionné
      d’informatique depuis mes 10
      ans. Polyvalent et autonome,
      je m’adapte très vite aux
      technologies demandés.</p>
    </Baneer>
    <Element name="technology" />
    <TechnoSection>
      <TechnoCard>
        <img src={ReactIcon} />
        <h3>React</h3>
        <p>Développement d'applications web. Utilisation de Mobx, maitrise des appels API (fetch/axios). React Class & Hooks. Maîtrise de l'APi Context</p>
      </TechnoCard>
      <TechnoCard>
        <img src={BootstrapIcon} />
        <h3>Bootstrap 4</h3>
        <p>Utilisation en standalone ou avec React (reactstrap), maîtrise des composants bootstrap avec JQuery</p>
      </TechnoCard>
      <TechnoCard>
        <img src={DockerIcon} />
        <h3>Docker</h3>
        <p>Maitrise de docker et de son intégration dans un pipeline d'intégration continue. Création des Dockerfile & docker-compose</p>
      </TechnoCard>
      <TechnoCard>
        <img src={NodeIcon} />
        <h3>Nodejs</h3>
        <p>Développement de serveur web (coté backend) avec le framework sails (sur le modèle API Rest) en architecture MVC</p>
      </TechnoCard>
      <TechnoCard>
        <img src={PhpIcon} />
        <h3>PHP 7</h3>
        <p>Développement de plugins et de thèmes pour Wordpress.</p>
      </TechnoCard>
      <TechnoCard>
        <img src={RailsIcon} />
        <h3>Ruby on Rails</h3>
        <p>Création d'un CRM et d'un extranet avec ruby on rails. Utilisation de Sidekick, elasticsearch. Rédaction de tests unitaires</p>
      </TechnoCard>
      <TechnoCard>
        <img src={WordpressIcon} />
        <h3>Wordpress</h3>
        <p>Céation de site web vitrine, de plugin wordpress et de thèmes Custom. Connaissances dans ACF et dans la WP_Rest API</p>
      </TechnoCard>
    </TechnoSection>
    <Element name='clients' />
    <ClientSection>
      <img src={TakerLogo} />
      <img src={ArgosoftLogo} />
      <img src={BoyerLogo} />
      <img src={GoogleLogo} />
      <img src={GpgLogo} />
      <img src={AtlanticLogo} />
    </ClientSection>
    <Element name="timeline" />
    <Timeline>
    </Timeline>
    <Element name="portfolio" />
    <ProjectSection>
      <ProjectCard to='/fer' img={GpgExtranet} title='Extranet Gpg' technology='Ruby on Rails'>
        Développement d'un extranet. Maintenance des applications existantes.
        Statistique utilisateur avec PowerBI. Communication avec le CMS Contao. Permet à des agences de pompe funèbre de s'approvisonner en monuments
        directement sur le site.
      </ProjectCard>
      <ProjectCard to='/fer' img={Milleparty} title='Milleparty.com' technology='Wordpress / React / PHP'>
        Développement d'un back office pour Milleparty.com. Site de mise en relation prestataire/client pour l'animation d'anniversaire pour enfants.
      </ProjectCard>
      <ProjectCard to='/fer' img={GpgCrm} title='Crm Gpg' technology='Ruby on Rails'>
        Développement d'un CRM pour GPG Granit (basé à Rennes). Permet à l'équipe commerciale de mieux organiser sa prospection.
      </ProjectCard>
      <ProjectCard to='/fer' img={Projipac} title='Projipac 4 Atlantic' technology='React / Node / Sails.js'>
        Création d'une application web de contrôle à distance de chaudière et de calcul de dimensionnement de pompe à chaleure pour Atlantic Group
        En partenariat avec Argosoft
      </ProjectCard>
    </ProjectSection>
    <Element name="contact" />
    <ContactForm />
  </div>
)

export default HomePage