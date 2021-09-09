import React, { useState, useEffect } from 'react'
// import FieldGroup from "./FieldGroup";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Field from './Field'
import Option from './Option'

const fieldMeetsCondition = (values) => (field) => {
  if (field.conditional && field.conditional.field) {
    const segments = field.conditional.field.split('_')
    const fieldId = segments[segments.length - 1]
    return values[fieldId] === field.conditional.value
  }
  return true
}

const Form = ({ formData, saveState, setSaveState }) => {
  // state to track the current page ID of the form
  //   const [page, setPage] = useState(0);

  // state to track the current form data that will be displayed
  const [currentPageData, setCurrentPageData] = useState(formData)

  // track the values of the form fields
  const [values, setValues] = useState(saveState || {})

  const [showForm, setShowForm] = useState(true)

  // this effect will run when the `page` changes
  useEffect(() => {
    const upcomingPageData = formData
    setCurrentPageData(upcomingPageData)
    setValues((currentValues) => {
      console.log('formData mudou', currentValues)
      const newValues = upcomingPageData.fields.reduce((obj, field) => {
        if (field.component === 'field_group') {
          for (const subField of field.fields) {
            obj[subField._uid] = ''
          }
        } else {
          obj[field._uid] = ''
        }

        return obj
      }, {})

      return Object.assign({}, newValues, currentValues)
    })
  }, [formData])

  // callback provided to components to update the main list of form values
  const fieldChanged = (fieldId, value, label) => {
    console.log('vvv',value)
    // use a callback to find the field in the value list and update it
    setValues((currentValues) => {
      currentValues[fieldId] = { value, label }
      return currentValues
    })

    // this just fakes that we've updated the `currentPageData` to force a re-render in React
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData)
    })
  }
  useEffect(() => {
    console.log('values', values)
  }, [values])

  //   const navigatePages = (direction) => () => {
  //     const findNextPage = (page) => {
  //       const upcomingPageData = formData[page];
  //       if (upcomingPageData.conditional && upcomingPageData.conditional.field) {
  //         // we're going to a conditional page, make sure it's the right one
  //         const segments = upcomingPageData.conditional.field.split("_");
  //         const fieldId = segments[segments.length - 1];

  //         const fieldToMatchValue = values[fieldId];

  //         if (fieldToMatchValue !== upcomingPageData.conditional.value) {
  //           // if we didn't find a match, try the next page
  //           return findNextPage(direction === "next" ? page + 1 : page - 1);
  //         }
  //       }
  //       // all tests for the page we want to go to pass, so go to it
  //       return page;
  //     };

  //     setPage(findNextPage(direction === "next" ? page + 1 : page - 1));
  //   };

  //   const nextPage = navigatePages("next");
  //   const prevPage = navigatePages("prev");

  const onSubmit = (e) => {
    e.preventDefault()
    // todo - send data somewhere
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>{currentPageData.label}</h2>
      {showForm && currentPageData.fields
        .filter(fieldMeetsCondition(values))
        .map((field) => {
          switch (field.component) {
            // case "field_group":
            //   return (
            //     <FieldGroup
            //       key={field._uid}
            //       field={field}
            //       fieldChanged={fieldChanged}
            //       // should probably only slice out the required values, but ¯\_(ツ)_/¯
            //       values={values}
            //     />
            //   );
            case 'options':
              return (
                <Option
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]?.value}
                />
              )
            default:
              return (
                <Field
                  key={field._uid}
                  field={field}
                  fieldChanged={fieldChanged}
                  value={values[field._uid]?.value}
                />
              )
          }
        })}
      {/* {page > 0 && <button onClick={prevPage}>Back</button>}&nbsp;
      {page < formData.length - 1 && <button onClick={nextPage}>Next</button>} */}
      <hr />
      <Button
        onClick={() => {
          Object.values(values).map((option) => {
            if (option) {
              console.log(option)
            }
          })
        }}
      >
        Dump form data
      </Button>

      <Button
        onClick={() => {
            setShowForm(pV => !pV)
            setSaveState(values)
            // setValues({})
        }}
      >
        Next Page
      </Button>
    </form>
  )
}

export default Form
