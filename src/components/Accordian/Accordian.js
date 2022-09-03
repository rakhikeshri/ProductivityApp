import React, { useState } from 'react';
import { AccordianDisplay } from './AccordianDisplay';
import { data } from './qadata'
import { MdSearch } from 'react-icons/md'
import './accordian.css';
import ReactPaginate from 'react-paginate';

export const Accordian = () => {
    const [questions, setQuestions] = useState(data)
    const [searchQa, setSearchQa] = useState('')
    const [pageNo, setPageNo] = useState(0)

    const qaPerPage = 5
    const pagesVisited = pageNo * qaPerPage

    const pageCount = Math.ceil(questions.length / qaPerPage)
    const changePage = ({ selected }) => {
        setPageNo(selected)
    } 

    return (
        <main>
            <div className="question-container">  
                <h2 >Questions / Answers</h2>
                <section className="qa-info">
                    <div className='search-qa-box'>
                    <input type='text' className='search-qa' placeholder='search the questions/answers..' onChange={(e) => setSearchQa(e.target.value)} />
                    <MdSearch className='search-icon' size = '1.5em' />
                    </div>
                    {questions.filter((question) => question.question.toLowerCase().includes(searchQa)).slice(pagesVisited, pagesVisited + qaPerPage).map((question) => {
                        return <AccordianDisplay key={question.id} {...question} />
                    })}
                    <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"prevBtn"}
                        NextLinkClassName={"nextBtn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </section>
            </div>
        </main>
    )
}