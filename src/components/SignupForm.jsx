import React, { useState } from 'react';
import styled from 'styled-components';


const Alert = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0.5rem 1rem;
  font-size: 14px;

  border-radius: 8px;
  
`;

const FormContainer = styled.div`
  display: flex;  
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%
  padding: 1.5rem

`;

const Input = styled.input`
  margin: 0.5rem 0 1rem;
  width: 100%  
  
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  margin: 10px;
  font-weight: 500;
`;

const CheckBoxInput = styled.input`
  margin-right: 8px;
`;

const Button = styled.button`
  background-color: #661fff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  margin: 2rem 0 0.8rem 0;
`;

const SocialButtons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const SignupForm = () => {
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === retypePassword) {
      // Handle form submission logic here when password and retype password match, and terms are accepted
      console.log('Form submitted successfully');
      setShowSuccess(true)
      setShowAlert(false)
    } else {
      // Display an error message or prevent submission
      console.log('Form submission failed. Passwords must match, and terms must be accepted.');
      setShowAlert(true);   
      setShowSuccess(false)
    }

  };

  


  return (
    <div className='w-full h-full p-8 md:p-16 bg-slate-100 flex items-center justify-center mx-auto font-poppins'>
      <FormContainer className='w-full md:w-[35%] px-4 md:px-10 py-8 bg-white rounded-lg'>
       <Form className='mx-5 w-full' onSubmit={handleSubmit}>
        <img className='flex items-center mx-auto' src='https://aimedlabs.com/logo1.svg'/>
          <h1 className='text-4xl text-center  my-5'>Sign Up</h1>
  
          <div className="relative z-0 w-full mb-6 group font-semibold">
      <input type="name" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="text-ls peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Create a Login ID</label>
  </div>
  <div className="relative z-0 w-full mb-6 group font-semibold">
      <input 
      type="password" 
      name="floating_password" 
      id="floating_password" 
      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
      value={password}
      
      onChange={(e) => setPassword(e.target.value)}
      required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>  
  
  <div className="relative z-0 w-full mb-6 group font-semibold">
      <input 
      type="password" 
      name="floating_password" 
      id="floating_password" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
      value={retypePassword}
      onChange={(e) => setRetypePassword(e.target.value)}
      required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Re-Enter Password</label>
  </div>


          <Checkbox>
            <CheckBoxInput type="checkbox" />
            Remember me
          </Checkbox>
          <Checkbox>
            <CheckBoxInput
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            I agree to the Terms and Conditions.
          </Checkbox>

          <Button type="submit">Sign Up</Button>

          <p className='mb-2'>Existing User?<a className='mx-1 font-bold text-[#661fff]' href="/login">Sign In</a></p>


          <SocialButtons>
            <button className='flex flex-row items-center gap-3 bg-slate-200 hover:bg-slate-300 transition ease-linear duration-500 border-[1px] px-[33px] py-2 rounded-md'><img className='relative -left-2.5 rounded-full' width={20} src='./google.png' /> Continue with Google</button>
            <button className='flex flex-row items-center gap-3 bg-slate-200 hover:bg-slate-300 transition ease-linear duration-500 px-6 py-2 rounded-md'><img width={20} className='rounded-full' src='./facebook.png' />Continue with Facebook</button>
          </SocialButtons>
        </Form>
      </FormContainer>
      <Alert className='transition-all bg-[#ffcccc] border-2 border-[#ff0000] ease-linear duration-500 z-50' show={showAlert}>
        <span className='font-medium'>Passwords don`t match.</span> 
      </Alert>       
      
      <Alert className='transition-all text-green-800 rounded-lg bg-green-100 border-2 border-green-800  ease-linear duration-500 z-50' show={showSuccess}>
        <span className='font-medium'>Sign Up Successful!</span> 
      </Alert>      
      
      </div>
  );
};

export default SignupForm;
