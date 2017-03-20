(function(commonDBService) {
    'use strict';
    var sendSuccess = function(res) {
        return {
            isSuccess: true,
            isError: false,
            data: res
        };
        //return res;
    };

    var sendError = function(err) {
        return {
            isSuccess: false,
            isError: true,
            err: err
        };
    }

    commonDBService.insert = function(obj, next) {
        obj.save(function(err) {
            if (err) {
                next(sendError(err));
            } else {
                next(null, sendSuccess({
                    success: true
                }));
            }
        });
    };

    commonDBService.get = function(obj, next) {
        obj.find({}, function(err, objs) {
            if (err) {
                next(sendError(err));
            } else {
                next(null, sendSuccess(JSON.stringify(objs)));
            }
        });
    };

    commonDBService.getById = function(obj, id, next) {
        obj.findById(id, function(err, obj) {
            if (err) {
                next(sendError(err));
            } else {
                next(null, sendSuccess(JSON.stringify(obj)));
            }
        });
    };

    commonDBService.update = function(id, obj, data, next) {
        obj.findOneAndUpdate({
            _id: id
        }, data, function(err, doc) {
            if (err) {
                next(sendError(err));
            } else {
                next(null, sendSuccess(doc));
            }
        });
    };

    commonDBService.remove = function(id, obj, next) {
        obj.remove({
            _id: id
        }, function(err, doc) {
            if (err) {
                next(sendError(err));
            } else {
                next(null, sendSuccess(JSON.stringify({
                    id: id
                })));
            }
        })
    }
})(module.exports);
