<template>
    <section id="home" class="hero relative h-screen">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div class="flex flex-col items-center">
                <span class="job-subTitle absolute -top-10 text-[28px] md:text-[45px] text-[#b4b4b4] tracking-widest">Full-stack</span>
                <span class="job-title text-[45px] md:text-[120px] text-[#ffff] ">Developer</span>
            </div>
        </div>

        <div class="absolute si-wrapper flex flex-col items-center bottom-0 left-1/2 -translate-x-1/2">
            <div class="scroll-indicator relative w-6 md:w-10 h-5 md:h-10 border-4 md:border-6 border-l-white border-t-white rotate-45"></div>
            <h2 class="scroll relative text-[#c0c0c0] text-[0.5rem] md:text-[1rem]">Scroll to learn more</h2>
        </div>
    </section>

    <main class="overflow-x-hidden">
        <section class="feature-card-wrapper relative h-screen w-screen">
            <div data-aos="flip-up" class="feature-card absolute w-[80%] md:w-[80%] lg:w-[60%] h-[42%] md:h-[45%] lg:h-[40%] left-1/2 top-3/4 -translate-x-1/2 -translate-y-3/4 rounded-[10px] border-2 border-white flex text-center items-center md:text-center text-[#0e0e0e] p-10">
                <p class="text-lg sm:text-[2.1rem] md:text-[2.2rem]">Je transforme des idées en applications fonctionnelles et élégantes, en alliant sérieux, créativité et apprentissage constant.</p>
                <!-- <p class="text-[1.4rem] sm:text-[1.8rem] md:text-[1.8rem] lg:text-4xl">I turn ideas into functional and elegant applications by combining seriousness, creativity, and continuous learning.</p> -->
            </div>
        </section>

        <section id="me" class="me relative flex flex-col lg:flex-row  w-screen bg-[#0e0e0e]">
            <div class="profil w-[100%] md:w-[100%] lg:w-[50%] min-h-screen ">
                <div class="relative flex flex-col gap-1 px-5 lg:px-30 py-20 text-white">
                    <h1 data-aos="fade-right" data-aos-delay="0" data-aos-duration="2500" class="poppins text-[3.5rem] scale-y-120 font-bold ">Cah Myam</h1>
                    <h2 data-aos="fade-left" data-aos-delay="300" data-aos-duration="2500" class="poppins text-[1.14rem] md:text-[1.38rem] text-[#b4b4b4] tracking-widest">Full-stack Developer</h2>
                    <br>
                    <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="2500" class="poppins text-md lg:text-md text-gray-300">
                        Je développe des applications web en associant un back-end bien structuré à des interfaces simples et faciles à utiliser.
                        J’aime chercher des solutions en analysant un problème étape par étape, en explorant différentes approches algorithmiques jusqu’à trouver celle qui fonctionne.
                        Je suis plus à l’aise sur le back-end, mais je crée aussi des interfaces propres pour assurer une bonne expérience utilisateur.
                    </p>
                    <br>
                    <p data-aos="fade-left" data-aos-delay="700" data-aos-duration="2500" class="poppins text-md lg:text-md text-gray-300">
                        Pendant mon temps libre, je joue de la guitare,
                        je regarde des vidéos de billard et je vais pêcher pour me reconnecter un peu à la nature.
                    </p>


                    <div class="links absolute -bottom-10 -lg:bottom-50 left-1/2 -translate-x-1/2">
                        <ul class="relative flex gap-5 items-center text-center"> 
                            <li>
                                <a href="#">
                                    <Icon name="uil:github" size="2rem" style="color: white" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icon name="uil:linkedin" size="2rem" style="color: white" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icon name="mdi:gmail" size="2rem" style="color: white" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Icon name="streamline-logos:whatsapp-logo-solid" size="2rem" style="color: white" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div ref="experiences" id="experiences" class="experiences flex flex-col gap-5 w-[100%] md:w-[100%] lg:w-[50%] min-h-screen lg:h-screen items-center lg:items-start py-5 overflow-y-scroll ">

                <div class="experiences-card flex gap-8 w-[90%] px-4 py-2 text-white hover:bg-white/10 hover:rounded-2xl hover:backdrop-blur-md hover:border hover:border-white/10">
                    <div class="date poppins relative flex text-left text-[0.9rem] text-[#b4b4b4] w-[25%] h-[100%] py-3">
                        <p>2025 —  present</p>
                    </div>
                    <div class="description poppins relative flex flex-col w-[75%] h-[100%] text-left  py-3 gap-3">
                        <h1 class="post relative text-md font-semibold">Application de gestion de présence avec reconnaissance faciale · Assurance Aro </h1>
                        <p class="details poppins relative text-gray-400 text-sm">
                            Conception de l’architecture front/back et mise en place du module de reconnaissance faciale (OpenCV / face embeddings).
                            Développement des API et de la logique métier connectées à la base de données Rukovoditel,
                            avec personnalisation des entités (utilisateurs, présences, historiques), configuration des workflows et gestion des permissions.
                            Développement d’une interface de pointage indépendante (capture + validation faciale) et implémentation de l’enregistrement automatisé des présences ainsi que de l’historisation complète dans Rukovoditel.
                        </p>
                        <div class="technos relative w-[100%] flex flex-wrap gap-1.5">
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Python</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Javascript</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Html</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Css</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Php</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Rukovoditel</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">PostgreSQL</span>
                        </div>
                    </div>
                </div>



                 <div class="experiences-card flex gap-8 w-[90%] px-4 py-2 text-white hover:bg-white/10 hover:rounded-2xl hover:backdrop-blur-md hover:border hover:border-white/10">
                    <div class="date poppins relative flex text-left text-[0.9rem] text-[#b4b4b4] w-[25%] h-[100%] py-3">
                        <p>2024 —  2025</p>
                    </div>
                    <div class="description poppins relative flex flex-col w-[75%] h-[100%] text-left  py-3 gap-3">
                        <h1 class="post relative text-md font-semibold">Développeur Full-Stack – Application web de gestion de clinique · Projet Academique</h1>
                        <p class="details poppins relative text-gray-400 text-sm">
                            Conception de l’architecture applicative et modélisation des entités métier (patients, actes médicaux, dépenses, recettes, catégories comptables).
                            Développement du front-end et du back-end avec mise en place des modules de gestion financière (enregistrements des actes, saisie des dépenses/recettes, calcul automatique du chiffre d’affaires).
                            Implémentation d’une base de données centralisée permettant le suivi des opérations financières,
                            la génération d’historiques et l’agrégation des données pour l’affichage d’un tableau de bord analytique (statistiques, courbes, indicateurs clés).
                        </p>
                        <div class="technos relative w-[100%] flex flex-wrap gap-1.5">
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Laravel</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Php</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Html</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Css</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">Javascript</span>
                            <span class="poppins px-3 py-1 text-xs rounded-4xl bg-[#36449c] ">PostgreSQL</span>
                        </div>
                    </div>
                </div>

    
                <section class="text-white py-16 px-6 md:px-12 max-w-5xl mx-auto">
                    <h2 class="text-3xl md:text-4xl font-semibold mb-10 tracking-wide">Tech Stack</h2>

                    <div class="grid md:grid-cols-2 gap-10">

                    
                        <div class="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                            <h3 class="text-xl font-medium mb-4">Frontend</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[25%]">
                                        <Icon name="logos:nuxt-icon" size="1.5rem"/>
                                    </div>
                                    <div >
                                        <span>Nuxt.js</span>
                                    </div>
                                </li>
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[25%]">
                                        <Icon name="logos:vue" size="1.5rem" />
                                    </div>
                                    <div >
                                        <span>Vue.js</span>
                                    </div>
                                </li>
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[25%]">
                                        <Icon name="logos:tailwindcss-icon" size="1.5rem" />
                                    </div>
                                    <div class="relative w-[50%]">
                                        <span>Tailwind CSS</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        
                        <div class="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                            <h3 class="text-xl font-medium mb-4">Backend</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[20%]">
                                        <Icon name="logos:django-icon"  size="2rem" />
                                    </div>
                                    <div>
                                        <span>Django (Python)</span>
                                    </div>
                                </li>
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[20%]">
                                        <Icon name="logos:laravel" size="2rem" />
                                    </div>
                                    <div>
                                        <span>Laravel (PHP)</span>
                                    </div>
                                </li>
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[20%]">
                                        <Icon name="logos:spring-icon" size="2rem" />
                                    </div>
                                    <div>
                                        <span>Spring Boot (Java)</span>   
                                    </div>   
                                </li>
                            </ul>
                        </div>

                        
                        <div class="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                            <h3 class="text-xl font-medium mb-4">Databases</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[25%]">
                                        <Icon name="logos:mysql" size="2rem" />
                                    </div>
                                    <div>
                                        <span>MySQL</span>
                                    </div>
                                </li>
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[25%]">
                                        <Icon name="logos:postgresql"size="2rem" />
                                    </div>
                                    <div>
                                        <span>PostgreSQL</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        
                        <div class="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                            <h3 class="text-xl font-medium mb-4">Tools & Methodology</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[25%]">
                                        <Icon name="logos:git-icon" size="2rem" />
                                    </div>
                                    <div>
                                        <span>Git / GitHub</span>
                                    </div>
                                </li>
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[20%]">
                                        <Icon name="simple-icons:postman" size="2rem" class="text-orange-500" />
                                    </div>
                                    <div>
                                        <span>Postman</span>
                                    </div>
        
                                </li>
                                <li class="flex items-center gap-3">
                                    <div class="relative w-[25%]">
                                        <Icon name="material-symbols:mail-outline" size="2rem" />
                                    </div>
                                    <div>
                                        <span>Agile / Scrum</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

            </div>
        </section>
        

        <section id="projects" class="projects flex flex-col gap-10 min-h-screen bg-white px-5 py-10 md:px-28 md:py-18">

            <h2 class="text-3xl md:text-4xl font-semibold tracking-wide">Projects</h2>
            <div class="grid md:flex md:flex-wrap justify-center gap-8 ">

                <div class="bg-white block max-w-md md:w-md md:max-w-sm h-[500px] rounded-[10px] shadow-xl">
                    <a href="#">
                        <div class="w-[100%] h-[56%] rounded-t-[10px] bg-no-repeat bg-cover bg-center" style="background-image: url('/images/bg-card.jpg');"></div>
                    </a>
                    <div class="p-6 text-center">
                        <a href="#">
                            <h5 class="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">Application de présence avec reconnaissance faciale.</h5>
                        </a>
                        <!-- <a href="#" class="inline-flex items-center text-white bg-[#36449c] rounded-md hover:bg-[#5564c3] focus:ring-2 shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                            Read more
                            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                        </a> -->
                        <a href="#" class="inline-flex items-center text-white bg-[#36449c] rounded-md hover:bg-[#5564c3] focus:ring-2 shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                            En savoir plus
                            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                        </a>
                    </div>
                </div>



                <div class="bg-white block max-w-md md:w-md md:max-w-sm h-[500px] rounded-[10px] shadow-xl">
                    <a href="#">
                        <div class="w-[100%] h-[56%] rounded-t-[10px] bg-no-repeat bg-cover bg-center" style="background-image: url('/images/download.png');">
                        </div>
                    </a>
                    <div class="p-6 text-center">
                        <a href="#">
                            <h5 class="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading"> Application web de gestion de clinique.</h5>
                        </a>
                        <!-- <a href="#" class="inline-flex items-center text-white bg-[#36449c] rounded-md hover:bg-[#5564c3] focus:ring-2 shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                            Read more
                            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                        </a> -->
                        <a href="#" class="inline-flex items-center text-white bg-[#36449c] rounded-md hover:bg-[#5564c3] focus:ring-2 shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                            En savoir plus
                            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                        </a>
                    </div>
                </div>




                <div class="bg-white block max-w-md md:w-md md:max-w-sm h-[500px] rounded-[10px] shadow-xl">
                    <a href="#">
                        <div class="w-[100%] h-[56%] rounded-t-[10px] bg-no-repeat bg-cover bg-center" style="background-image: url('/images/bg-card.jpg');">
                        </div>
                    </a>
                    <div class="p-6 text-center">
                        <a href="#">
                            <h5 class="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">···</h5>
                        </a>
                        <!-- <a href="#" class="inline-flex items-center text-white bg-[#36449c] rounded-md hover:bg-[#5564c3] focus:ring-2 shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                            Read more
                            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                        </a> -->
                        <a href="#" class="inline-flex items-center text-white bg-[#36449c] rounded-md hover:bg-[#5564c3] focus:ring-2 shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                            En savoir plus
                            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                        </a>
                    </div>
                </div>
            </div>


        </section>
    </main>

    <footer id="contact" class="grid lg:flex  min:w-screen min-h-screen md:h-screen bg-white px-5 md:px-10 md:pt-15 md:gap-15">


        <div class="relative flex flex-col min-h-screen text-left ">
            <!-- <h1 data-aos="fade-right" data-aos-duration="1000" class="poppins text-7xl md:text-9xl">Nice to <span class="Birthstone-Casual-Regular text-[8rem] ml-[50%] md:ml-0 md:text-[12rem] text-[#36449c]">meet</span></h1> -->
            <h1 data-aos="fade-right" data-aos-duration="1000" class="poppins text-7xl md:text-9xl"> Merci de votre <span class="Birthstone-Casual-Regular text-[8rem] md:ml-0 md:text-[12rem] text-[#36449c]">visite</span></h1>
            <!-- <h2 class="-mt-5  text-sm md:text-md text-gray-500 tracking-widest">Located in Mada. Online – near you</h2> -->
            <h2 class="-mt-5 text-sm md:text-md text-gray-500 tracking-widest">Basé à Mada. En ligne – près de chez vous</h2>
            <p data-aos="fade-right"  data-aos-duration="1000" class="poppins flex items-center gap-2 text-4xl text-black mt-10">
                <a href="/cv_carino.pdf" download="">My CV</a>
                <Icon name="pixelarticons:arrow-up" class="text-5xl rotate-125" style="color: black" />
            </p>
            <div data-aos="fade-right"  data-aos-duration="1000" class="under w-44 h-1 bg-black "></div>

            <ul data-aos="fade-right" data-aos-duration="1000" class="absolute bottom-0 md:bottom-8 flex flex-col gap-2">
                <li>
                    <a href="https://github.com/Vanonanotahina" class="poppins flex items-center gap-4 text-sm md:text-md text-bold hover:underline">
                        <Icon name="uil:github" class="text-black text-[1.5rem] md:text-[1.8rem]" />
                        <p>GitHub</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/andriamihamina-carino-6884a9284/" class="poppins flex items-center gap-4 text-sm md:text-md  text-bold hover:underline">
                        <Icon name="uil:linkedin" class="text-black text-[1.5rem] md:text-[1.8rem]" />
                        <p>Linkedin</p>
                    </a>
                </li>
                <li>
                    <a href="#" class="poppins flex items-center gap-4 text-sm md:text-md  text-bold hover:underline">
                        <Icon name="mdi:gmail" class="text-black text-[1.5rem] md:text-[1.8rem]" />
                        <p>vanonanotahina@gmail.com</p>
                    </a>
                </li>
                <li>
                    <a href="#" class="poppins flex items-center gap-4 text-sm md:text-md  text-bold hover:underline">
                        <Icon name="streamline-logos:whatsapp-logo-solid" class="text-black text-[1.5rem] md:text-[1.8rem]" />
                        <p>+261349948512</p>
                    </a>
                </li>
                <li>
                    <p class="mt-8 text-sm text-[rgb(116, 116, 116)]">© 2025</p>
                </li>
            </ul>
        </div>

        <div class="relative flex-grow flex-wrap flex flex-col items-center justify-center py-15 md:py-0">
            <!-- <h1 class="poppins text-black text-[2.2rem] mb-10">Leave a message</h1> -->
            <h1 class="poppins text-black text-2xl md:text-[2.2rem] mb-10">Laisser un message</h1>
            <form @submit.prevent="submitForm" class="w-xs max-w-md md:w-lg mx-auto mb-10">
                <div ref="notifs" class="relative hidden bg-green-500/10 text-sm rounded-md block px-5 py-4.5 shadow-xs mb-10 duration-1000 ease-in"></div>
                <div class="mb-10">
                    <!-- <label for="email" class="poppins block mb-3 text-sm font-medium text-heading">Your email</label> -->
                    <label for="email" class="poppins block mb-3 text-sm font-medium text-heading">Ton email</label>
                    <input 
                        v-model="formData.email"
                        type="email" 
                        id="email" 
                        class="bg-[#5564c3]/10 border border-gray-300 text-heading text-sm rounded-md focus:border-[#36449c] block w-full px-5 py-4.5 shadow-xs placeholder:text-body" 
                        placeholder="name@example.com" 
                        required 
                    />
                </div>

                <div class="mb-10">
                    <!-- <label for="message" class="poppins block mb-3 text-sm font-medium text-heading">Your message</label> -->
                    <label for="message" class="poppins block mb-3 text-sm font-medium text-heading">Ton message</label>
                    <textarea 
                        v-model="formData.message"
                        id="message" 
                        rows="5"
                        class="bg-[#5564c3]/10 border border-gray-300 text-heading text-sm rounded-md focus:border-[#36449c] block w-full px-5 py-4.5 shadow-xs placeholder:text-body" 
                        placeholder="Write your message here..."
                        required
                    ></textarea>
                </div>

                <label for="confirm" class="flex items-center mb-6">
                    <input 
                        id="confirm" 
                        type="checkbox" 
                        class="w-4 h-4 border border-gray-300 rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                    />
                    <p class="poppins ms-2 text-sm font-medium text-heading select-none">
                        Je ne suis pas <a href="#" class="text-[#5564c3] hover:underline">un robot</a>.
                    </p>
                </label>

                <!-- <button 
                    type="submit" 
                    class="text-white bg-[#36449c] rounded-md hover:bg-[#5564c3] focus:ring-4 shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                    Submit
                </button> -->
                 <button
                    type="submit" 
                    class="text-white bg-[#36449c] rounded-md hover:bg-[#5564c3] focus:ring-4 shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none">
                    Valider
                </button>
            </form>

        </div>

    </footer>

</template>

<script setup lang="ts">
    definePageMeta({layout:"default"});



    import { toast } from 'vue-sonner'
    import { ref, onMounted } from 'vue'

    const experiences = ref<HTMLElement | null>(null)

    onMounted(() => {
        if (experiences.value) {
            experiences.value.addEventListener('wheel', (e) => e.stopPropagation())
            experiences.value.addEventListener('touchmove', (e) => e.stopPropagation())
        }
    })


    const formData = ref({ message: '', email: '' });

    const notifs = ref<HTMLElement | null>(null);

    interface SendMessageResponse {
        success: boolean
        message?: string
    }

    async function submitForm () {

        try{
            console.log('Form submitted:', formData.value);

            const response = await $fetch<SendMessageResponse>('/api/message/sendMessage', {
                method: 'post',
                body: { message: formData.value['message'], email: formData.value['email']},
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.success) {
                toast.success("Votre message est bien envoyer,je vous repondrais dans moins de 24h");
                if (notifs.value) {
                    notifs.value.style.display ="block"
                    notifs.value.textContent = "Votre message est bien envoyer,je vous repondrais dans moins de 24h";
                }
                formData.value.email = ""
                formData.value.message = ""
            } else {
                toast.error("Desolé une erreur s'est produite");
                if (notifs.value) {
                    notifs.value.style.display ="block"
                    notifs.value.textContent= "Desolé une erreur s'est produite";
                }
            }
            console.log(response);
        } catch (error: unknown) {
            console.error(error);
        }
    }

</script>