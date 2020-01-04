import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMail, resetMailStatus } from '../../actions/common/mailAction';

export const SendMail = ({mail: {mailSent, mailResponse}, sendMail, resetMailStatus}) => {

    const [sendTo, setSendTo] = useState('');
    const [mailSubject, setMailSubject] = useState('');
    const [mailText, setMailText] = useState('');
    const [mailHtml, setMailHtml] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const mailData = { sendTo, mailSubject, mailText, mailHtml };
        sendMail(mailData);
        
        setSendTo('');
        setMailSubject('');
        setMailText('');
        setMailHtml('');
    };

    if (mailSent) {
        alert(JSON.stringify(mailResponse));
        resetMailStatus();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="sendMailTo">Send Email To: </label>
                <input type="email" className="form-control" name="sendMailTo" id="sendMailTo" value={sendTo} onChange={ (e)=>setSendTo(e.target.value) } tabIndex="1" />
            </div>
            <div className="form-group">
                <label htmlFor="mailSubject">Subject: </label>
                <input type="text" className="form-control" name="mailSubject" id="mailSubject" value={mailSubject} onChange={ (e)=>setMailSubject(e.target.value) } tabIndex="2" />
            </div>
            <div className="form-group">
                <label htmlFor="mailText">Simple Text (Optional): </label>
                <input type="text" className="form-control" name="mailText" id="mailText" value={mailText} onChange={ (e)=>setMailText(e.target.value) } tabIndex="3" />
            </div>
            <div className="form-group">
                <label htmlFor="mailHtml">Mail Content (HTML Supported): </label>
                <textarea type="email" className="form-control" name="mailHtml" id="mailHtml" value={mailHtml} onChange={ (e)=>setMailHtml(e.target.value) } tabIndex="4"></textarea>
            </div>
            <input type="submit" value="Send Mail" className="btn btn-primary btn-block"/>
        </form>
    );
};

SendMail.propTypes = {
    sendMail: PropTypes.func.isRequired,
    resetMailStatus: PropTypes.func.isRequired,
    mail: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    mail: state.mail
});

const mapDispatchToProps = {
    sendMail,
    resetMailStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMail);