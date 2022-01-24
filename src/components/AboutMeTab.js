import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
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
        title: '\"Tech guy\"',
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
        content: 'Yes, I have a thing for space. Especially mars.',
        date: 'SPACEX',
        comment: 'Wen Orbit',
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
    <div className="md:w-9/12 lg:w-6/12 pr-4 py-6">
      <Tab.Group vertical>
        <Tab.List className="flex p-1  bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-base leading-5 text-blue-700 rounded-lg tracking-widest font-semibold',
                  'focus:outline-none focus:ring-2 ring-offset-2',
                  selected
                    ? 'bg-white shadow text-blue-800' 
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
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
                'bg-gray-500 rounded-xl p-3 bg-opacity-10'
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

                    <p className='text-sm text-gray-400'>
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