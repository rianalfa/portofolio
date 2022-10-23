import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tab, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import ProjectItem from '../project-item';

export default function Projects({page}) {
    const [tabIndex, setTabIndex] = useState(0);
    let indexes = [0,1,2,3,4];
    return (
        <Transition
            className='absolute top-0 left-0 w-full'
            show={page=="projects"}
            enter="transition-all duration-500 delay-300"
            enterFrom="scale-50 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition-all duration-300"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-150 opacity-0"
        >
            <div className='flex flex-col space-y-8 md:space-y-12'>
                <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl text-gray-800 font-bold'>Project(s) I <span className='text-blue-600'>Have Done</span></h1>
                        <Tab.List className='flex space-x-2'>
                            {indexes.map((i) => {
                                return (
                                    <Tab as={Fragment} key={i}>
                                        {({ selected }) => (
                                            <div className={`bg-gray-300 rounded-full relative cursor-pointer outline-0 ${selected ? "w-10" : "w-5"} h-5`}>
                                                <Transition className='absolute top-0 left-0'
                                                    show={selected} enter="transition-all duration-200" enterFrom="scale-0" enterTo="scale-100" leave="transition-all duration-200" leaveFrom="scale-100" leaveTo="scale-0">
                                                    <div className='bg-blue-700 rounded-full w-10 h-5'></div>
                                                </Transition>
                                            </div>
                                        )}
                                    </Tab>
                                )
                            })}
                        </Tab.List>
                    </div>
                    <Tab.Panels>
                        <Tab.Panel>
                            {({ selected }) => (
                                <ProjectItem tabIndex={tabIndex} index={0}
                                    title="iClass Education v1.0" subtitle="Web-based education platform for high-shcoolers in Indonesia."
                                    website="" repository="https://github.com/erikrihendri20/iclass">
                                    <p className='text-lg font-semibold'>Full-Stack Developer</p>
                                    <p className='mt-4 w-full'>I worked with my team to build a website for our client. The team was formed by three developer (including me), but I was introduced later into the team. I worked as a full-stack developer on seperated features, just like the other two of the team. We used Codeigniter 4 as the main framework for the project.</p>
                                </ProjectItem>
                            )}
                        </Tab.Panel>
                        <Tab.Panel>
                            {({ selected }) => (
                                <ProjectItem tabIndex={tabIndex} index={1}
                                    title="iClass Education 2.0" subtitle="Web-based education platform for high-shcoolers in Indonesia."
                                    website="https://iclasseducation.id" repository="https://github.com/rianalfa/iclasseducation">
                                    <p className='text-lg font-semibold'>Full-Stack Developer</p>
                                    <p className='mt-4 w-full'>I worked as a stand-alone developer on building the second version of iClass Education website. I built both the Back-End Side and the Front-End Side. iClass Education v2.0 was built using Laravel v8 as the main framework for the project along with of Livewire v2.</p>
                                </ProjectItem>
                            )}
                        </Tab.Panel>
                        <Tab.Panel>
                            {({ selected }) => (
                                <ProjectItem tabIndex={tabIndex} index={2}
                                    title="Tera(p)sikologi" subtitle="Web-based psychotest platform for high-schoolers to help them choose their approriate majors for college."
                                    website="https://terapsikologi.com" repository="https://github.com/kuli-ngoding/unp">
                                    <p className='text-lg font-semibold'>Project Leader & Full-Stack Developer</p>
                                    <p className='mt-4 w-full'>I worked with my team to build a website for our client. The team was formed by three developers (including me). I worked as a full-stack developer on seperated features, just like the other two of the team. We used Laravel v8 as the main framework for the project.</p>
                                </ProjectItem>
                            )}
                        </Tab.Panel>
                        <Tab.Panel>
                            {({ selected }) => (
                                <ProjectItem tabIndex={tabIndex} index={3}
                                    title="Koding School" subtitle="Web-based education platform to learn programming (built as a Thesis for my Bachelor degree)."
                                    website="" repository="https://github.com/rianalfa/kodingschool">
                                    <p className='text-lg font-semibold'>Full-Stack Developer</p>
                                    <p className='mt-4 w-full'>I worked as a stand-alone developer to build this website (because this project was developed for my Bachelor degree thesis). The website was successfully built and was accepted by the target users.</p>
                                </ProjectItem>
                            )}
                        </Tab.Panel>
                        <Tab.Panel>
                            {({ selected }) => (
                                <ProjectItem tabIndex={tabIndex} index={4}
                                    title="SiKoKo" subtitle="Web-based dashboard built to help management proccess during field activities."
                                    website="" repository="https://git.stis.ac.id/60/sikoko-60">
                                    <p className='text-lg font-semibold'>Project Leader & Back-End Developer</p>
                                    <p className='mt-4 w-full'>I mainly worked as the project leader, but I also worked as one of the Back-End developer for the project. I worked on seperated features, just like the other developer on the project (less number of features compared to the other developer).</p>
                                </ProjectItem>
                            )}
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </Transition>
    )
}
