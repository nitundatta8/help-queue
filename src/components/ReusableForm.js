import React from 'react'
import PropType from 'prop-types'


function ReusableForm(props) {
  return (
    <React.Fragment>
      <hr />
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name=' names'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Descripe your issue' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}
ReusableForm.prototype = {
  formSubmissionHandler: PropType.func,
  buttonTest: PropType.string
}
export default ReusableForm;