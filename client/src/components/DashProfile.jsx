import { Alert, Button, Modal, ModalBody, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';

import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const DashProfile = () => {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const filePickerRef = useRef();
  const dispatch = useDispatch();
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
    <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
    <form  className='flex flex-col gap-4'>
      <input
        type='file'
        accept='image/*'
        
        hidden
      />
      <div
        className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'
        onClick={() => filePickerRef.current.click()}
      >
        {imageFileUploadProgress && (
          <CircularProgressbar
            value={imageFileUploadProgress || 0}
            text={`${imageFileUploadProgress}%`}
            strokeWidth={5}
            styles={{
              root: {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              },
              path: {
                stroke: `rgba(62, 152, 199, ${
                  imageFileUploadProgress / 100
                })`,
              },
            }}
          />
        )}
        <img
          src={imageFileUrl || currentUser.profilePicture}
          alt='user'
          className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${
            imageFileUploadProgress &&
            imageFileUploadProgress < 100 &&
            'opacity-60'
          }`}
        />
      </div>
      {imageFileUploadError && (
        <Alert color='failure'>{imageFileUploadError}</Alert>
      )}
      <TextInput
        type='text'
        id='username'
        placeholder='username'
        defaultValue={currentUser.username}
       
      />
      <TextInput
        type='email'
        id='email'
        placeholder='email'
        defaultValue={currentUser.email}
        
      />
      <TextInput
        type='password'
        id='password'
        placeholder='password'
        
      />
      <Button
        type='submit'
        gradientDuoTone='purpleToBlue'
        outline
        disabled={loading || imageFileUploading}
      >
        {loading ? 'Loading...' : 'Update'}
      </Button>
      {currentUser.isAdmin && (
        <Link to={'/create-post'}>
          <Button
            type='button'
            gradientDuoTone='purpleToPink'
            className='w-full'
          >
            Create a post
          </Button>
        </Link>
      )}
    </form>
    <div className='text-red-500 flex justify-between mt-5'>
      <span onClick={() => setShowModal(true)} className='cursor-pointer'>
        Delete Account
      </span>
      <span  className='cursor-pointer'>
        Sign Out
      </span>
    </div>
    {updateUserSuccess && (
      <Alert color='success' className='mt-5'>
        {updateUserSuccess}
      </Alert>
    )}
    {updateUserError && (
      <Alert color='failure' className='mt-5'>
        {updateUserError}
      </Alert>
    )}
    {error && (
      <Alert color='failure' className='mt-5'>
        {error}
      </Alert>
    )}
    <Modal
      show={showModal}
      onClose={() => setShowModal(false)}
      popup
      size='md'
    >
      <Modal.Header />
      <Modal.Body>
        <div className='text-center'>
          <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
          <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
            Are you sure you want to delete your account?
          </h3>
          <div className='flex justify-center gap-4'>
            <Button color='failure'>
              Yes, I'm sure
            </Button>
            <Button color='gray' onClick={() => setShowModal(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </div>
  )
}

export default DashProfile