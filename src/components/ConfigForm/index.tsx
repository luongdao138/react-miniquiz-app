import { Formik, Form, FormikProps, Field, FormikHelpers, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import { QuestionConfig, QuestionDifficulty, QuestionType } from '../../models';
import { loadCategory } from '../../redux/category';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import classes from './ConfigForm.module.scss';
import * as Yup from 'yup';
import { setConfig } from '../../redux/config';
import { useRouter } from '../../hooks';

interface ConfigFormState {
  amount: number;
  category: number;
  type: QuestionType;
  difficulty: QuestionDifficulty;
}

const intialValues: ConfigFormState = {
  amount: 0,
  category: 0,
  type: 'any',
  difficulty: 'any',
};

// type MyRadioProps = { label: string } & FieldHookConfig<{}>;

// const MySelect = ({ label, ...props }: MyRadioProps) => {
//    const [ field, meta, helpers ] = useField<{}>(props);

//    return <div className="form-group">
//                 <label htmlFor={props.id || props.name}>{label}</label>
//                 <select {...field} {...props} />
//                 {  meta.error && meta.touched ? <div>{meta.error}</div> : null }
//           </div>
// }

const validationSchema = Yup.object({
  amount: Yup.number()
    .required('Required!')
    .min(10, 'Must be greater or equal to 10!')
    .max(30, 'Must be less than 30!')
    .integer('Must be an interger!'),
});

const ConfigForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const categories = useAppSelector((state) => state.category.list);

  const handleSubmit = (values: ConfigFormState, helpers: FormikHelpers<ConfigFormState>) => {
    const config: QuestionConfig = {
      amount: Number(values.amount),
      category: Number(values.category),
      difficulty: values.difficulty,
      type: values.type,
    };

    dispatch(setConfig(config));
    // go to play page
    router.replace('/play');
  };

  useEffect(() => {
    dispatch(loadCategory());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Formik
        initialValues={intialValues}
        onSubmit={handleSubmit}
        enableReinitialize
        validationSchema={validationSchema}
      >
        {(formik: FormikProps<ConfigFormState>) => (
          <Form>
            <div className={classes.form_group}>
              <label htmlFor='amount'>Amount of questions</label>
              <Field name='amount' type='number' id='amount' />
              <ErrorMessage name='amount' component='div' className={classes.error} />
            </div>
            <div className={classes.form_group}>
              <label htmlFor='difficulty'>Difficulty</label>
              <Field name='difficulty' id='difficulty' as='select'>
                <option value='any'>Any difficulty</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
              </Field>
            </div>
            <div className={classes.form_group}>
              <label htmlFor='type'>Type</label>
              <Field name='type' id='type' as='select'>
                <option value='any'>Any type</option>
                <option value='multiple'>Multiple choice</option>
                <option value='boolean'>Boolean</option>
              </Field>
            </div>
            <div className={classes.form_group}>
              <label htmlFor='category'>Category</label>
              <Field name='category' id='category' as='select'>
                <option value={0}>Any category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Field>
            </div>

            <button type='submit'>Get started</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConfigForm;
