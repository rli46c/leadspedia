import React, {useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const FileUpload = ({}) => {

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose file...');

    const onChange = (e) => {
        let tempFileArray = e.target.files;
        if (tempFileArray.length) {
            setFile(tempFileArray[0]);
            setFilename(tempFileArray[0].name);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        try {
            const res = await axios.post('/api/common/csvxlsxtodb', formData, config);
            console.log(JSON.stringify(res.data.msg));
            
        } catch (err) {
            console.log(JSON.stringify(err));
        }

    };

    return (
        <form onSubmit={onSubmit}>
            <div className="custom-file mb-4">
                <input type="file" name="csvxlsxfileupload" id="csvxlsxfileupload" className="custom-file-input" onChange={onChange} />
                <label className="custom-file-label" htmlFor="csvxlsxfileupload">{ filename }</label>
                <input type="submit" value="Upload CSV/XLSX file" className="btn btn-primary btn-block mt-4" />
            </div>
        </form>
    );
};

FileUpload.propTypes = {
    // prop: PropTypes
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);