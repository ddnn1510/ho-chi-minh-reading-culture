import { Form, useNavigation } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/admin/AdminFormPage';
import { FormRow, FormRowSelect } from '../../components';
import { POST_STATUS, TITLE_OF_POST_STATUS } from '../../../../utils/constants';
import { CustomEditor } from '../../components/admin';

const AddPost = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Tạo mới bài viết</h4>
        <div className="form-center">
          <FormRow type="text" name="title" labelText="Tiêu đề" />
          <CustomEditor name="content" labelText="Nội dung" />
          <FormRowSelect
            name="status"
            labelText="Trạng thái"
            list={Object.values(POST_STATUS)}
            titleList={TITLE_OF_POST_STATUS}
            defaultValue={POST_STATUS.DRAFT}
          />
          <div className="form-btn-container">
            <button className="btn btn-block form-btn" disabled>
              Huỷ
            </button>
            <button className="btn btn-block form-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Đang lưu bài' : 'Lưu bài'}
            </button>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddPost;
