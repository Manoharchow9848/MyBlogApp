import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to See my latest Project?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these 
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://chatterzone-mc.onrender.com/" target='_blank' rel='noopener noreferrer'>
                    MY APP
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/1723954588802-chat.png?alt=media&token=77419be8-8eda-4c15-a6da-64ee455cb232" />
        </div>
    </div>
  )
}