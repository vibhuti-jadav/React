import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="w-7xl mx-auto">
            <div className="grid grid-cols-2">
                <div className="">
                    <h1>contact</h1>
                    <img className='w-100' src="" alt="" />
                </div>
                <div className="col-6">
                    <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                                    </div>
                                    <div class="mb-3">
                                    <label for="formGroupExampleInput2" class="form-label">Another label</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact