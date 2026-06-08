Devoir 2

CCU pour le développement d'un site de service

BUTS

Ce deuxième devoir est destiné à vous donner une expérience pratique de l'approche de conception

centrée sur l'usager (CCU) vers le développement d'un prototype haute fidélité d'un site d'entreprise

de services.

Par « entreprise de services », j'entends un type d'entreprise qui offre des services accessibles par

rendez-vous. Par exemple, une entreprise de services peut être un salon de coiffure, une clinique

dentaire, un site de réparation de vélos, une clinique vétérinaire, etc.

Nous travaillerons dans le cadre de la CCU qui implique le prototypage (conception itérative) ainsi

que la prise en compte des objectifs des utilisateurs.

Voici des exemples d'objectifs de l'utilisateur :

•Site de réparation de vélos

**o**Nahar veut savoir quand l'atelier de réparation de vélos est ouvert, où il se trouve et s’il

peut se présenter sans rendez-vous.

•Site coiffeur

**o**Lucy veut prendre un rendez-vous pour une coupe de cheveux courte avec la coiffeuse

Jessica le mercredi 27 mai à 14h.

•Site vétérinaire

**o**Eric veut prendre un rendez-vous pour son chien Toby chez le vétérinaire SuperAnimaux

pour qu'il se fasse couper les griffes.

•Site du dentiste

**o**Jahir veut mieux comprendre ce qu'est un traitement de canal et combien cela coûte.

En réalisant ce devoir, vous allez :

•Mieux comprendre les approches de prototypage, en particulier le développement de

maquettes (mockups) à l’aide d’outils (e.g Figma)

•Pratiquer l'approche de conception itérative

•Continuer votre exploration du design visuel débuté dans le dernier devoir

•Vous familiariser avec HTML, CSS, Bootstrap et JavaScript pour créer le site Web de

l'entreprise

© Caroline Barrière, Université d'OttawaCALENDRIER / DATES LIMITES

Voici les événements importants du calendrier pour ce devoir.

•Tutoriel du lundi 25 mai

Assurez-vous d'assister au tutoriel du 25 mai dans lequel vous explorerez plus en détail les exigences

de ce devoir et le logiciel Figma pour le prototypage.

•Suivi du forum sur Brightspace entre le mardi 26 mai et le vendredi 5 juin

Si quelque chose n’est pas clair en lien au devoir, vous pouvez poser des questions sur le forum

Brightspace. N'importe quelle question est la bienvenue. Ma seule demande est que vous posiez vos

questions avec politesse et respect. Entre le mardi et le vendredi, chaque soir, un AE surveillera le

forum et répondra à vos questions.

•Courriel au AE (si besoin) entre le 26 mai et le 5 juin

Après avoir utilisé le forum, si ce n’est pas suffisant, vous pouvez contacter l’AE assigné à votre

section (Z01 ou Z02) pour établir un temps de rencontre. N’hésitez pas.

•Remise du rapport : dimanche 7 juin à minuit

Vous DEVEZ remettre votre rapport, qui contiendra un lien vers votre portfolio, au plus tard le

dimanche 7 mai. Aucune extension ne sera accordée. Les seules exceptions seront les raisons

médicales justifiées par certificats médicaux. La pénalité est de 20 % par jour de retard. Un délai de

grâce est prévu jusqu’à 1 h du matin… mais ensuite, la pénalité est de -20 % !

•Inscription à un groupe de rétroaction (dimanche 7 juin)

Assurez-vous d'inscrire votre nom sur le calendrier pour les groupes de rétroaction. Votre

participation est obligatoire pour mettre en pratique vos compétences d'analyse et obtenir des

commentaires sur votre conception.

•Participation à un groupe de rétroaction (entre le 11 et 17 juin)

Votre séance de rétroaction en groupe aura lieu dans les 10 jours suivant votre soumission. Toute

absence à cette séance entraînera une pénalité de 20 % sur votre note de devoir.

© Caroline Barrière, Université d'OttawaTUTORIELS EN LIGNE / TECHNOLOGIES

En plus du matériel présenté par votre AE durant son tutoriel, vous pouvez consulter les ressources

suivantes :

Maquettes

Pour le développement de vos maquettes, veuillez consulter les tutoriels suivants :

•Tutoriel Figma

**o**https://www.youtube.com/watch?v=ezldKx-jPag

**o**https://www.youtube.com/watch?v=JGLfyTDgfDc

•Tutoriel sur Pencil Project

**o**https://www.youtube.com/watch?v=wT64vMT1Ax0

Technologies de développement web

Pour le développement de votre prototype final, en plus des tutoriels sur le développement web

publiés dans la description du devoir 1, veuillez voir ci-dessous les tutoriels liés à React*:

**o**https://react-bootstrap.netlify.app/docs/getting-started/introduction/

**o**https://www.youtube.com/watch?v=acgtyCnQAAw

**o**https://www.youtube.com/watch?v=SqcY0GlETPk

**o**https://www.youtube.com/watch?v=x4rFhThSX04

* L’utilisation de JavaScript est obligatoire, mais l’utilisation de React (à ce stade du semestre) n’est

pas encore obligatoire. Néanmoins, c’est avec React que les AEs pourront vous aider. Vous pouvez

utiliser un framework JavaScript différent, mais sans soutien de l’équipe de SEG3525.

© Caroline Barrière, Université d'OttawaEXIGENCES / REQUIS

1.Choisissez un site de service

Décidez de l'entreprise de services que vous souhaitez explorer. Dans la section BUTS ci-haut, j'ai

suggéré : salon de coiffure, dentiste, réparation de vélos, vétérinaire. Ce ne sont que des

suggestions. N'importe quelle entreprise de services est très bien.

La section suivante vous demandera de définir des personnages (personas) avec des objectifs. En

plus de fournir les fonctionnalités nécessaires pour répondre à ces objectifs, votre site de service

doit minimalement permettre à un utilisateur de :

•Se renseigner sur le nom et le type de votre entreprise

•Connaître les coordonnées de votre entreprise

•Voir des informations sur le concepteur du site (par exemple, un message « conçu par... »

quelque part sur la page)

•Rester intéressé par vos services et souhaiter les utiliser (défi de votre conception visuelle)

2.Créez 2 personnages (personas)

Développez deux personnages en tant qu'utilisateurs cibles du site Web du service. Pour CHAQUE

persona, il faudra :

•Donner un nom à votre personnage

•Définir 3 caractéristiques intrinsèques à votre personnage

•Fournir la relation à la technologie et la relation au domaine de votre personnage

•Donner 1 objectif à votre personnage (par exemple, prendre un rendez-vous, trouver des

informations sur les différents services et les prix, etc.)

Les objectifs choisis peuvent varier légèrement en fonction de votre type de service, mais puisque je

demande un site de service, les objectifs devraient être d'obtenir l'accès à ces services.

© Caroline Barrière, Université d'Ottawa3.Créez 2 scénarimages visuellement différents

Un scénarimage est une série de maquettes montrant comment un personnage atteint son but de

façon linéaire (étape par étape). Pour chacun de vos personnages, créez un scénarimage. Chaque

scénarimage doit contenir au moins trois maquettes montrant 3 étapes pour atteindre un objectif.

Par exemple, si l'objectif est de prendre un rendez-vous pour une coupe courte dans un salon de

coiffure, le scénarimage pourrait contenir :

-Maquette avec la sélection du service (coupe courte) et l’accès à la réservation

-Maquette montrant le calendrier pour la réservation

-Maquette montrant la confirmation de réservation

Pour mettre en pratique la génération d’alternatives et continuer notre exploration de la conception

visuelle, vous devez créer des maquettes visuellement différentes pour vos 2 scénarimages. Explorez

2 thèmes de couleurs différents, différentes mises en page, différentes façons de montrer

l’information. Assurez-vous que vos scénarimages sont visuellement différents et qu’ils reflètent des

personnalités possibles de votre site.

VEUILLEZ NOTER : Vous exposerez vos scénarimages à vos collègues au cours des sessions de

rétroaction. Assurez-vous que vos designs sont différents, car vos collègues seront invités à les

comparer et à donner leur avis.

4.Créez un prototype interactif haute-fidélité

À l'aide d’un framework JavaScript (par exemple, React), créez un seul prototype interactif haute

fidélité qui combinera les objectifs de vos deux personnages et reflétera vos choix de conception

visuelle.

Le choix final de la conception peut être une combinaison des choix faits dans les deux scénarimages

ou peut être inspiré d’un seul. Assurez-vous d'expliquer la relation entre vos scénarimages et votre

prototype haute-fidélité final dans votre rapport.

Le prototype haute-fidélité doit répondre aux exigences techniques suivantes :

a.Être développé à l'aide d'un framework JavaScript (p. ex., React) ;

b.Être interactif (répondre aux commandes – boutons, sélections de listes)

c.Être accessible via votre portfolio (conçu au devoir 1)

© Caroline Barrière, Université d'OttawaVotre prototype haute-fidélité doit être guidé par des principes de conception visuelle :

a.L’utilisation d’un thème de couleur assurant une cohérence

b.Une réflexion sur la typographie

c.Une réflexion sur l'iconographie

d.Une réflexion sur la mise en page (layout) et l'utilisation de l'espace négatif

e.Une réflexion sur les principes de contraste, d'échelle, d'équilibre, de hiérarchie visuelle

5.Associez votre portefolio à votre prototype haute-fidélité

Vous avez créé votre portfolio lors du Devoir1. Vous devez maintenant lier votre portfolio au

prototype haute-fidélité du site de service. Vous pouvez aussi (si vous le souhaitez), lier votre

portfolio à vos 2 scénarimages pour montrer votre méthode de travail et contribuer à la section de

votre portfolio décrivant votre expertise et votre méthode de design.

Votre portfolio et votre site de service doivent être accessibles au public (ou, si vous préférez,

protégés par un mot de passe qui sera fourni dans votre rapport).

L’AE doit être en mesure de tester votre interface utilisateur sans avoir à communiquer avec vous.

C’est essentiel.

6.Rédigez un court rapport décrivant votre processus de conception et vos choix :

Votre rapport doit inclure :

1.Concepteur: nom, numéro d'étudiant

2.Service: le nom + type du service que vous avez décidé de faire

3.Scénarimages avec maquettes:

a.Définition de vos 2 personnages

b.Les 2 scénarimages (avec chacun au moins 3 maquettes), un pour chaque

personnage, et tous deux visuellement différents

4.Prototype haute-fidélité

a.Une explication des choix que vous avez faits en matière de conception visuelle en

lien aux scénarimages (différences, similitudes)

b.Lien vers votre portfolio (qui lui comprendra un lien vers le site de service)

5.Code : Un lien vers Github (ou autre répertoire contenant votre code)

6.Reconnaissance de l’IA générative: Plusieurs d’entre vous utiliserez l’IA générative pour vous

aider à créer (a) vos maquettes, (b) votre prototype haute-fidélité et (c) votre rapport.

Décrivez le rôle de l’IA générative pour chacun des éléments, en indiquant les outils GenAI

utilisés et vos interactions avec eux.

© Caroline Barrière, Université d'OttawaÉVALUATION

Ce devoir vaut 8% de votre semestre et est évalué sur 100 points.

•Le contenu et la clarté de votre rapport (10 points)

**o**Rapport facile à lire et répondant aux questions requises.

**o**Parcourez la liste des 6 éléments donnée ci-dessus. Votre rapport doit contenir tous

ces éléments avec des réponses pour mieux comprendre vos choix de design et l’aide

apportée par l’IA générative.

•Vos deux personnages et deux scénarimages différents (20 points)

•Votre site web hébergé, accessible et réalisé selon les exigences fournies (50 points)

**o**L'interface utilisateur doit refléter les choix faits en matière de conception visuelle

**o**L'interface utilisateur doit être une extension/combinaison de scénarimages

•Votre participation active à la séance de rétroaction (20 points)

**o**Capacité à analyser les projets des autres étudiants en lien aux principes étudiés en

cours

**o**Capacité à répondre aux questions de l’AE et des autres étudiants

SOUMISSION

Chaque étudiant (il s’agit d’un devoir individuel) doit soumettre son rapport en version PDF (voir

toutes les exigences ci-dessus) sur Brightspace. Le lien se trouve dans la section Devoirs, pour le

Devoir 2.

De plus, et c'est très important, assurez-vous de vous inscrire sur la feuille d'inscription pour votre

rétroaction en groupe. Vous serez informés lorsque la feuille d'inscription sera disponible.

QUESTIONS

•Consultez la section Horaire/Date limite du présent document. Cette section indique des

tutoriels, des laboratoires et un forum pour obtenir de l'aide et répondre à vos questions.

•Veuillez NE PAS envoyer de courriels au professeur. L’aide sur le forum devrait être

suffisante pour répondre à vos questions. Ne soyez pas timide.

•Si l’aide sur le forum n’est pas suffisante, demandez un rdv avec l’AE assigné à votre section.

N’hésitez pas.

© Caroline Barrière, Université d'Ottawa
