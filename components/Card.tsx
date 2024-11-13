import Link from 'next/link'
import { Models } from 'node-appwrite'
import React from 'react'
import Thumbnail from './Thumbnail'
import { convertFileSize } from '@/lib/utils'
import ActionDropdown from './ActionDropdown'
import FormattedDateTime from './FormattedDateTime'

const Card = ({ file }: Models.Document) => {
    return (
        <Link href={file.url} className='file-card' target='_blank'>
            <div className='flex justify-between'>
                <Thumbnail
                    type={file.type}
                    extension={file.extension}
                    url={file.url}
                    className='!size-20'
                    imageClassName='!size-11' />
            </div>


            <div className="flex flex-col items-end justify-between">
                {/* <ActionDropdown file={file} /> */}
                Action
                <p className="body-1">{convertFileSize(file.size)}</p>
            </div>

            <div className="file-card-details">
                <p className="subtitle-2 line-clamp-1">{file.name}</p>
                <FormattedDateTime
                    date={file.$createdAt}
                    className="body-2 text-light-100"
                />
                <p className="caption line-clamp-1 text-light-200">
                    By: {file.owner.fullName}
                </p>
            </div>

            {file.name}
        </Link>
    )
}

export default Card