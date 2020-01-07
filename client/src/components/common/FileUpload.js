import React, {useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fileUpload, xlsxToDB } from '../../actions/common/fileAction';

export const FileUpload = ({file: { fileUploadStatus, uploadedFileName }, fileUpload, xlsxToDB}) => {

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

        fileUpload(formData);
    };

    const onPopulate = async () => {
        if (fileUploadStatus) {
            xlsxToDB(uploadedFileName);
        } else {
            alert('Upload file first..');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="custom-file mb-4">
                <input type="file" name="csvxlsxfileupload" id="csvxlsxfileupload" className="custom-file-input" onChange={onChange} />
                <label className="custom-file-label" htmlFor="csvxlsxfileupload">{ filename }</label>
                <input type="submit" value="Upload CSV/XLSX file" className="btn btn-primary btn-block mt-4" />
                <button className="btn btn-danger btn-block mt-4" onClick={ onPopulate }>Populate Database</button>
            </div>
        </form>
    );
};

FileUpload.propTypes = {
    file: PropTypes.object.isRequired,
    fileUpload: PropTypes.func.isRequired,
    xlsxToDB: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    file: state.file
});

const mapDispatchToProps = {
    fileUpload,
    xlsxToDB
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);