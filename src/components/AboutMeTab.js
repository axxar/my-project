import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AboutMeTab() {
  let [categories] = useState({
    Personal: [
      {
        id: 1,
        title: 'Photographer',
        content: 'One of the natural talents which I enjoy and love to the fullest. More of a portrait person but I do love landscapes too.',
        date: '4+ Years & still learning',
        comment: 'Canon'
      },
      {
        id: 2,
        title: 'Tech guy',
        content: 'Expected to have answers for every tech problems in life  but mostly it is plug-out and plug-in.',
        date: 'Everyday',
        comment: 'Reboot',
      },
      {
        id: 3,
        title: 'Gamer',
        content: 'Therapy for me. Even it means sleepless nights and headaches.',
        date: 'Assassin\'s Creed',
        comment: 'COD',
        shareCount: 12,
      },
      {
        id: 4,
        title: 'Astrophile',
        content: 'Yes, I have a thing or two for space.',
        date: 'SPACEX',
        comment: 'AXIOM',
        shareCount: 12,
      },
    ],
    Professional: [
      {
        id: 1,
        title: 'Software Developer',
        content: 'Develop and maintain web-based systems based on client needs.',
        date: '2+ Years',
        comment: 'Coffee is a must',
      },
      {
        id: 2,
        title: "IT Student Researcher",
        content: 'Helped in moving client\'s monolithic database system to Google Cloud.',
        date: '8 months',
        comment: 'Things we do in school',
      },
    ],
  })

  return (
    <div className="pr-4">
      <Tab.Group vertical>
        <Tab.List className="flex p-1 bg-gray-900/50 dark:bg-blue-900/60 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 leading-5 rounded-lg tracking-widest text-lg font-semibold',
                  'focus:outline-none focus:ring-2 ring-offset-2',
                  selected
                    ? 'bg-zinc-200 dark:bg-white shadow text-dark text-blue-800 dark:text-blue-800' 
                    : 'hover:bg-white/40 hover:text-dark dark:hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-gray-300 dark:bg-gray-700 rounded-xl p-3'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-base font-medium leading-5">
                      {post.title}
                    </h3>

                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                      {post.content}
                    </p>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.comment}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}